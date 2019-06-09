import Page from '../layouts/Main';

import { Input, Button, FileInput, TextArea, Select, MultipleCheckBoxes } from '../components/FormElements';

import { LockedWeb3Browser, NoWeb3Browser, Web3ConnectionProps } from '../components/Web3Status';
import { TransactionMonitor } from '../components/TransactionMonitor';

import SubHeader from '../components/SubHeader';
import Processing from '../components/LoadingIndicator';
import Warning from '../components/Warning';

import { SpreadsheetHelper } from '../utils/fileHelpers';
import { Web3ConnectionHandler } from '../utils/web3-connect';
import Misc from '../utils/misc';

const xplAddress = "0x51f43d0c05eEfdEB70eEAf973e0b8286E494902D";

class EthDistributor extends React.Component {
	constructor(props) {
		super(props);
		this.newDistribution = {
			selectedFileName: "No file selected",
			textAreaWithAddresses: "",
			etherAmount: "",
			totalAmount: "",
			totalAddresses: "",
			showTransactionMonitor: false,
			transactionBatch: "",
			transferPerBatch: 180,//recommeded
			transactionInProgress: false
		}
		this.state = {
			isUnifiedAmount: true, 
			isWeb3Browser: false, 
			web3BrowserConnected: false,
			isProcessing: false,
			...this.newDistribution
		}
		this.toggleAmount = this.toggleAmount.bind(this);
		this.toggleTransactionMonitor = this.toggleTransactionMonitor.bind(this);
		this.restartDistribution = this.restartDistribution.bind(this);
		this.unlockBrowser = this.unlockBrowser.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleReset = this.handleReset.bind(this);
	}
	unlockBrowser() {
		let self = this;
		Web3ConnectionHandler.enableWeb3Browser()
		.then(function() {
			self.setState({web3BrowserConnected: true});
		})
		.catch(function(err) {
			console.log(err)
		})
	}
	
	toggleAmount() {
		this.setState({
			isUnifiedAmount: !this.state.isUnifiedAmount
		})
	}

	toggleTransactionMonitor() {
		this.setState({
			showTransactionMonitor: !this.state.showTransactionMonitor
		})
	}

	handleBlur(e) {
		let {name, value} = e.target;
		this.setState({[name]: value});
		if ( name == "textAreaWithAddresses" ) {
			this.handleAddresses(value);
		} else if ( name == "etherAmount" ) {
			this.handleAmount(value);
		}
	}

	handleChange(e) {
		let {name, value} = e.target;
		let self = this;

		if (name == "uploadFileInput") {
			let uploadElement = document.getElementById(name);
			let files = uploadElement.files;

			if(files.length > 0 ) {
				self.setState({
					selectedFileName: files[0].name,
					isProcessing: true
				});

				SpreadsheetHelper.readFile(files[0])
				.then( json => {
					return SpreadsheetHelper.readObjectProperty(json);
				})
				.then( columnsObject => {
					if ( columnsObject["amounts"] ) {
						/*self.setState({
							etherAmount: columnsObject["amounts"],
							textAreaWithAddresses: columnsObject["addresses"]
						})*/
						self.handleAmount(columnsObject["amounts"].join());
						self.handleAddresses(columnsObject["addresses"].join());
					} else {
						/*self.setState({
							textAreaWithAddresses: columnsObject["addresses"]
						})*/
						self.handleAddresses(columnsObject["addresses"].join());
					}
				})
				.catch( err => {
					window.alert("Invalid file.")
				})
				.finally(() =>  {
					self.setState({isProcessing: false});
					uploadElement.value = "";
				}) 

			}
		} else {
			self.setState({[name]: value});	
		} 
	}

	handleAmount(amountValue) {
		let totalAmount;
		if ( !this.state.isUnifiedAmount ) {
			let amountsArray = (amountValue.replace(/\s+/g, "")).split(',');
				amountsArray = Misc.removeFalsey(amountsArray);

			let validateAmounts = !amountsArray.some( amt => !Number(amt) );

			if ( validateAmounts && amountsArray.length) {
				
				let amountCount = amountsArray.length;
				totalAmount = amountCount + " (" + amountsArray.reduce(Misc.numberReducer) + ")";

				this.setState({
					totalAmount,
					etherAmount: amountsArray,
					etherAmountInputCssClass: "is-success"
				});
			} else {
				this.setState({
					etherAmountInputCssClass: "is-danger"
				});
			}
		} else if ( this.state.isUnifiedAmount ) {
			let amounts = Number(amountValue);
			if ( amounts ) {
				totalAmount = "Unified";

				this.setState({
					totalAmount,
					etherAmount: amounts,
					etherAmountInputCssClass: "is-success"
				});
			} else {
				this.setState({
					etherAmountInputCssClass: "is-danger"
				});
			}
		}
	}

	handleAddresses(addressesValue) {
		let totalAddresses,
			addressesArray = (addressesValue.replace(/\s+/g, "")).split(',');
			addressesArray = Misc.removeFalsey(addressesArray);
			addressesArray = Misc.removeSpecialChars(addressesArray);
		// let validAddresses = Web3ConnectionHandler.validateAddress(addressesArray);
		if ( /*validAddresses*/ addressesArray.length ) {
			totalAddresses = addressesArray.length;
			this.setState({
				totalAddresses,
				textAreaWithAddresses: addressesArray,
				textAreaWithAddressesInputCssClass: "is-success"
			});

		} else {
			this.setState({
				textAreaWithAddressesInputCssClass: "is-danger"
			});	
		}
	}

	handleReset() {
		this.setState({
			etherAmountInputCssClass: "",
			textAreaWithAddressesInputCssClass: "",
			...this.newDistribution,
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		let self = this;
		//handle addresses
		if (!(self.state.textAreaWithAddresses instanceof Array) || !(self.state.textAreaWithAddresses.length > 0)) {
			return window.alert("ETH Addresses must be comma separated and not empty.");
		}
		// handle amount
		if (self.state.isUnifiedAmount) {
			if (!Number(this.state.etherAmount)) {
				
				return window.alert("Invalid amount of Ether.");
			} 
		} else {
			if (!(self.state.etherAmount instanceof Array) || !(self.state.etherAmount.length > 0)) {
				
				return window.alert("Amount is splitted and amount must be comma separated.");
			} 
			if (self.state.etherAmount.length != self.state.textAreaWithAddresses.length) {

				return window.alert("Amount is splitted and addresses count must be the same with amount count.");
			} 
		}
		// console.log(this.state);
		self.handleDistribution();
	}

	handleDistribution() {
		let self = this;

		let init = () => {
			if (self.state.isUnifiedAmount) {
				self.handleDistributionWithUnifiedAmount();
			} else {
				self.handleDistributionWithSplittedAmount();
			}

			// update transactionBatch
			let batches = [],
				length = Math.ceil(self.state.textAreaWithAddresses.length / self.state.transferPerBatch);
			for (let i = 0; i < length; i++) {
				let temp = {status: "pending", hash: "waiting for broadcast"};
				batches[i] = temp;
			}

			self.setState({
				transactionBatch: batches,
				showTransactionMonitor: true
			})
		}

		init();
	}

	handleDistributionWithSplittedAmount(iterator = 0, size = this.state.transferPerBatch) {
		
		iterator = Number(iterator);
		size = Number(size);
		
		let self = this;

		let chunkAddresses = self.state.textAreaWithAddresses.slice(iterator * size, (iterator + 1) * size);

		let chunkAmount = self.state.etherAmount.slice(iterator * size, (iterator + 1) * size);

			chunkAmount = chunkAmount.map(amt => amt * Math.pow(10, 18));

		if (!chunkAddresses.length) {
			return window.alert("Distribution completed!");
		}
		self.setState({isProcessing: true, transactionInProgress: true});

		Web3ConnectionHandler.distributeEtherWithSplittedAmount(
			chunkAddresses,
			chunkAmount
		)
		.then(txHash => {
			
			self.updateMonitor(iterator, {status: "processing", hash: txHash})

			return Web3ConnectionHandler.getMinedTransactionReceipt(txHash);
		})
		.then(txReceipt => {
			if (txReceipt.status == "0x0") {
				//transaction failed!
				self.updateMonitor(iterator, {hash: txReceipt.transactionHash, onClick: self.restartDistribution})

				return window.alert("Transaction at index "+iterator+" failed.");
			}
			
			self.updateMonitor(iterator, {status: "success", hash: txReceipt.transactionHash});
			
			//call the next transaction
			self.handleDistributionWithSplittedAmount(iterator + 1);
		})
		.catch(err => {
				self.updateMonitor(iterator, {hash: "txhash unknown", onClick: self.restartDistribution})

				// window.alert("Error occurred at transaction index "+iterator);
				// console.log(err)
		})
		.finally (() => {
			self.setState({isProcessing: false, transactionInProgress: false});
		}) 
	}
	handleDistributionWithUnifiedAmount(iterator = 0, size = this.state.transferPerBatch) {
		iterator = Number(iterator);
		size = Number(size);

		let self = this;

		let chunkAddresses = self.state.textAreaWithAddresses.slice(iterator * size, (iterator + 1) * size);
		
		let amount = self.state.etherAmount;
		
		if (!chunkAddresses.length) {
			return window.alert("Distribution completed!");
		}
		self.setState({isProcessing: true, transactionInProgress: true});
		Web3ConnectionHandler.distributeEtherWithUnifiedAmount(
			chunkAddresses,
			amount
		)
		.then(txHash => {
			self.updateMonitor(iterator, {status: "processing", hash: txHash})

			return Web3ConnectionHandler.getMinedTransactionReceipt(txHash);
		})
		.then(txReceipt => {
			if (txReceipt.status == "0x0") {
				//transaction failed!
				self.updateMonitor(iterator, {hash: txReceipt.transactionHash, onClick: self.restartDistribution})

				return window.alert("Transaction at index "+iterator+" failed.");
			}

			self.updateMonitor(iterator, {status: "success", hash: txReceipt.transactionHash});
			//call the next transaction
			self.handleDistributionWithUnifiedAmount(iterator + 1);
		})
		.catch(err => {
				self.updateMonitor(iterator, {hash: "txhash unknown", onClick: self.restartDistribution})

				window.alert("Error occurred at transaction index "+iterator);
				console.log(err)
		})
		.finally (() => {
			self.setState({isProcessing: false, transactionInProgress: false});
		}) 
	}
	restartDistribution(e) {
		let iterator = e.target.getAttribute("data-index");
		
		if (this.state.isUnifiedAmount) {
			this.handleDistributionWithUnifiedAmount(iterator);
		} else {
			this.handleDistributionWithSplittedAmount(iterator);
		}
	}
	updateMonitor(index, properties) {
		this.setState((state, props) => {
			let newBatch = [...state.transactionBatch];
				newBatch[index] = {...properties};
			return {
				transactionBatch: newBatch
			}
		});
	}
	formFields() {
		return {
			amountController: [
				{
					type: "radio",
					name: "amountController",
					placeholder: "Unified amount",
					defaultChecked: true,
					onChange: this.toggleAmount
				},

				{
					type: "radio",
					name: "amountController",
					placeholder: "Split amount",
					onChange: this.toggleAmount
				}
			],
			uploadFileInput: {
				name: "uploadFileInput",
				onChange: this.handleChange,
				label: "Import data (optional)",
				fileName: this.state.selectedFileName
			},
			etherAmountInput: {
				type: "text",
				name: "etherAmount",
				className: this.state.etherAmountInputCssClass + " is-large",
				value: this.state.etherAmount,
				placeholder: "ETH Amount",
				onBlur: this.handleBlur,
				onChange: this.handleChange
			},
			etherAmountTextArea: {
				name: "etherAmount",
				className: this.state.etherAmountInputCssClass,
				value: this.state.etherAmount,
				onBlur: this.handleBlur,
				onChange: this.handleChange,
				placeholder: "Unlimited comma separated amount in order of addresses \n240, 50, 100, 10, 75, 13, 5",
			},
			textAreaWithAddresses: {
				name: "textAreaWithAddresses",
				className: this.state.textAreaWithAddressesInputCssClass,
				value: this.state.textAreaWithAddresses,
				placeholder: "Unlimited comma separated addresses\n0x138e326c28114f65202b4ed82a1eecdf81451e09, 0xca353c48ab32b8baba846477d28254309be5e7c6",
				onBlur: this.handleBlur,
				onChange: this.handleChange
			},
			submitButton: {
				type: "submit",
				text: "Send Transaction",
				className: "button is-large is-link",
				disabled: this.state.transactionInProgress ? true : null
			},
			resetButton: {
				type: "button",
				text: "Reset",
				className: "button is-medium is-danger",
				onClick: this.handleReset
			},
			monitorButton: {
				type: "button",
				text: "Show monitor",
				className: "button is-warning is-small",
				onClick: this.toggleTransactionMonitor
			},
			transferPerBatch: {
				name: "transferPerBatch",
				value: this.state.transferPerBatch,
				onChange: this.handleChange,
				className: "is-small",
				options: [	
					{value: "100"},
					{value: "150"},
					{value: "180"},
					{value: "200"},
					{value: "220"},
					{value: "250"},
				]
			}
		}
	}
	componentDidMount() {
		if (!this.state.web3BrowserConnected) {
			if (Web3ConnectionHandler.checkBrowserCompatibility()) {
				this.setState({isWeb3Browser: true});
				this.unlockBrowser();
			}
		}
	}
	render() {
		if (this.state.web3BrowserConnected && this.state.isWeb3Browser) {
			return (
				<Page>
					<SubHeader />
					<section className="halfpage-height mb-4">
						<div className="container">
							<div className="columns">
								<form className="column is-8" onSubmit={this.handleSubmit}>
									
									<MultipleCheckBoxes 
										inputArray={this.formFields().amountController}
									/>
									<FileInput
										{...this.formFields().uploadFileInput} 
									/>

									{
										this.state.isUnifiedAmount &&
										<Input {...this.formFields().etherAmountInput} />
									}
									{
										!this.state.isUnifiedAmount &&
										<TextArea
											{...this.formFields().etherAmountTextArea} 
										/>
									}

									<TextArea
										{...this.formFields().textAreaWithAddresses} 
									/>

									<div className="field">
										<div className="control buttons">
											<Button
												{...this.formFields().submitButton}
											/>
											<Button
												{...this.formFields().resetButton}
											/>
										</div>
									</div>
								</form>
									
								<div className="column">
									<div className="is-size-6 has-background-white border-left">
										<Button
											{...this.formFields().monitorButton}
										/><br/>
										<span>Transfer per transaction</span><br/>
										<Select 
											{...this.formFields().transferPerBatch}
										/>
									</div>
									<br/>
									<DistributionStat
										totalAmount = {this.state.totalAmount}
										totalAddresses = {this.state.totalAddresses}
									/>
									<br/>

									{ this.state.isProcessing &&
										<Processing />
									}
									<br/>
									<Warning />
								</div>
							</div>			
						</div>
					</section>				
					{
						this.state.showTransactionMonitor &&
						<TransactionMonitor
							onClick={this.toggleTransactionMonitor}
							monitorArray={this.state.transactionBatch}
						/>	
					}
				</Page>	
			)
		} else if (this.state.isWeb3Browser) {
			return (
				<Page>
					<SubHeader />
					<LockedWeb3Browser 
						onClick={this.unlockBrowser}
					/>
				</Page>
			)
		} else {
			return (
				<Page>
					<SubHeader />
					<NoWeb3Browser />
				</Page>
			) 
		}
	}
}

function DistributionStat(props) {
	return (
		<div className="is-size-6">
			<h3 className="is-size-5">Statistics</h3>
			<p>
				Amount count: {props.totalAmount || 0} <br/>
				Address count: {props.totalAddresses || 0} 
			</p>
		</div>
	)
}

export default EthDistributor;