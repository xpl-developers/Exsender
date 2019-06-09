import Page from '../layouts/Main';
import SubHeader from '../components/SubHeader';
import { Input, Button, CheckBox } from '../components/FormElements';

import { LockedWeb3Browser, NoWeb3Browser } from '../components/Web3Status';
import { TransactionMonitor } from '../components/TransactionMonitor';
import Processing from '../components/LoadingIndicator';
import { Web3ConnectionHandler } from '../utils/web3-connect';
import Misc from '../utils/misc';


class WalletLifter extends React.Component {
	constructor(props) {
		super(props);
		this.newLifting = {
			showTransactionMonitor: false,
			transactionInProgress: false,
			transactionBatch: "",
			receivingAddress: "",
			addressTokens: ""
		}
		this.state = {
			isWeb3Browser: false, 
			web3BrowserConnected: false,
			isProcessing: false,
			...this.newLifting
		}
		this.toggleTransactionMonitor = this.toggleTransactionMonitor.bind(this);		
		this.restartDistribution = this.restartDistribution.bind(this);
		this.unlockBrowser = this.unlockBrowser.bind(this);
		this.scanWallet = this.scanWallet.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleLifting = this.handleLifting.bind(this);
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
	toggleTransactionMonitor() {
		this.setState({
			showTransactionMonitor: !this.state.showTransactionMonitor
		})
	}
	async scanWallet() {
		let tokens = await this.getAddressTokens();
		
		if (!tokens) {
			return window.alert("Seems wallet contains no token");
		}
		
		let tokenArray = [];

		for (let token of tokens) {
			let { balance } = token,
				{ address, name, decimals, symbol } = token.tokenInfo;
			tokenArray.push({balance, address, name, decimals, symbol, lift: true, status: "pending", hash: "waiting for broadcast"});
 		}
 		this.setState({
 			addressTokens: tokenArray
 		});
	}
	handleBlur(e) {
		let {name, value} = e.target;
		this.setState({[name]: value});
	}
	handleChange(e) {
		let {name, value} = e.target;
		let prop = this.state.addressTokens[name];
			prop.lift = !prop.lift;
		this.updateAddressTokens(name, prop);
	}
	handleLifting() {
		let isValidAddress = Web3ConnectionHandler.validateAddress(this.state.receivingAddress);
		if (!isValidAddress ) { 
			return window.alert("Enter a valid receiving address.");
		}
		this.setState({
			showTransactionMonitor: true
		})
		this.transferToken();
	}
	transferToken(iterator = 0) {
		iterator = Number(iterator);
		let self = this;

		let currentToken = this.state.addressTokens[iterator];

		if (currentToken && currentToken.lift) {
			// is selected for transfer
			self.setState({isProcessing: true, transactionInProgress: true});

			Web3ConnectionHandler.transferToken(
				this.state.receivingAddress,
				currentToken.balance,
				currentToken.address /*contract address*/
			)
			.then(txHash => {
				self.updateMonitor(iterator, {status: "processing", hash: txHash})
				return Web3ConnectionHandler.getMinedTransactionReceipt(txHash);
			})
			.then(txReceipt => {
				if (txReceipt.status == "0x0") {
					//transaction failed!
					self.updateMonitor(iterator, {hash: txReceipt.transactionHash, onClick: self.restartDistribution})
					return window.alert("Transfer at index "+iterator+" failed.");
				}
				
				self.updateMonitor(iterator, {status: "success", hash: txReceipt.transactionHash});
				
				//call the next transaction
				self.transferToken(iterator + 1);
			})
			.catch(err => {
					self.updateMonitor(iterator, {hash: "txhash unknown", onClick: self.restartDistribution})

					// window.alert("Error occurred at Transfer index "+iterator);
					// console.log(err)
			})
			.finally (() => {
				self.setState({isProcessing: false, transactionInProgress: false});
			}) 

		} else if (currentToken) {
			// do not transfer
			// go to the next
			self.transferToken(iterator+1);

		} else {
			return window.alert("Transfer completed!");
		}		
	}
	restartDistribution(e) {
		let iterator = e.target.getAttribute("data-index");
		this.transferToken(iterator);
	}
	getAddressTokens() {
		
		this.setState({isProcessing: true});

		return Web3ConnectionHandler.getAddressInfo()
		.then(addr => {
			if (addr.tokens) return addr.tokens;
			return;
		})
		.catch(err => {
			console.log(err);
			return;
		})
		.finally(() => {
			this.setState({isProcessing: false});
		})
	}
	updateAddressTokens(index, properties) {
		this.setState((state, props) => {
			let updatedAddressTokens = [...state.addressTokens];
				updatedAddressTokens[index] = {...properties};
			return {
				addressTokens: updatedAddressTokens
			}
		});
	}
	updateMonitor(index, properties) {
		let prop = this.state.addressTokens[index];
			prop.status = properties.status;
			prop.hash = properties.hash;
			prop.onClick = properties.onClick || null;
		this.updateAddressTokens(index, prop);
	}
	formFields() {
		return {
			receivingAddress: {
				type: "text",
				name: "receivingAddress",
				className: "is-medium",
				placeholder: "Receiving address",
				onBlur: this.handleBlur,
			},
			monitorButton: {
				type: "button",
				text: "Show monitor",
				className: "button is-warning is-small",
				onClick: this.toggleTransactionMonitor
			},
			scanWallet: {
				type: "button",
				text: "Scan Wallet",
				className: "button is-warning is-medium",
				onClick: this.scanWallet
			},
			liftButton: {
				type: "button",
				text: "Lift selected tokens",
				className: "button is-small is-warning",
				onClick: this.handleLifting,
				disabled: this.state.transactionInProgress ? true : null
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
								<div className="column is-10">
									{
										this.state.addressTokens
										&&
										<div>
											<Input 
												{...this.formFields().receivingAddress}
											/>
											<div>
												<span>Total token: {this.state.addressTokens.length}</span>
												&nbsp; | &nbsp;
												<span>Selected: {this.state.addressTokens.filter(t=>t.lift).length}</span>
												
												<span className="is-pulled-right">
													<Button {...this.formFields().liftButton} />
												</span>
												<hr/>
											</div>
											
											<TokenList
												tokenArray={this.state.addressTokens}
												onChange={this.handleChange}
											/>
										</div>
									}

									{
										!this.state.addressTokens
										&&
										<div className="has-text-centered mt-4 mb-4 pt-4 pb-4">
											<Button
												{...this.formFields().scanWallet}
											/>
											<p className="mt-4">
												Automate the movement of tokens from one address to another.
												<br/> <small>This feature is only available on the Main Network</small>
											</p>
										</div>
									}
									
								</div>
								<div className="column">
									<div className="is-size-6 has-background-white border-left">
										<Button
											{...this.formFields().monitorButton}
										/> <br/>
										
									</div><br/>

									{ this.state.isProcessing &&
										<Processing />
									}
									<br/>
								</div>
							</div>			
						</div>
					</section>	
					{
						this.state.showTransactionMonitor &&
						<TransactionMonitor
							onClick={this.toggleTransactionMonitor}
							monitorArray={this.state.addressTokens}
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

function TokenList(props) {
	let list = props.tokenArray.map((token, index) => {
		return (
			<li key={index} className="has-background-light border-left mt-1 mb-1 pb-1 pt-1">
				<span>{token.name} - {token.balance / Math.pow(10, token.decimals)} {token.symbol} </span>
				<span className="is-pulled-right"> 
					<CheckBox
						type="checkbox"
						defaultChecked={token.lift}
						onChange={props.onChange}
						name={index.toString()}
					/>
				</span> 
			</li>
		)
	})

	return (
		<ul> {list} </ul>
	)
}

export default WalletLifter;