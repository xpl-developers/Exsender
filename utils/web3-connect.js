import standardAbi from "../abi/distributor.json";
import Misc from './misc';

let xplAddress = "0x51f43d0c05eEfdEB70eEAf973e0b8286E494902D";
let networkKey = {
		"1": {"name": "Ethereum Main Network", "colour": "success"}, 
		"2": {"name": "Morden Test network", "colour": "dark"}, 
		"3": {"name": "Ropsten Test Network", "colour": "danger"},
		"4": {"name": "Rinkeby Test Network", "colour": "warning"}, 
		"42": {"name": "Kovan Test Network", "colour": "link"},
		"5": {"name": "Goerli Test Network", "colour": "info"},
		"60": {"name": "Gochain Network", "colour": "primary"},
	}

export class Web3ConnectionHandler {

	static checkBrowserCompatibility() {
		if (typeof window !== 'undefined' && (typeof window.ethereum !== 'undefined' || typeof window.web3 !== 'undefined')) {
			return window['ethereum'] || window.web3.currentProvider;
		}
	}

	static async enableWeb3Browser() {
		let provider = Web3ConnectionHandler.checkBrowserCompatibility();
		if (provider) {
			
			let browserProperties = {};
			
			try{
				let request = await provider.enable();
				browserProperties.selectedAddress = request[0];
				browserProperties.networkVersion = provider.networkVersion;
				return browserProperties;

			} catch (err) {
				console.log(JSON.stringify(err));
				throw (err);
				// return null;
			}
		}
	}

	static instantiateWeb3Browser() {
		let provider = Web3ConnectionHandler.checkBrowserCompatibility();
		if (provider) {
			let web3 = new Web3(provider);
			return web3;
		} 
	}
	static connectedNetwork() {
		return networkKey[Web3ConnectionHandler.checkBrowserCompatibility().networkVersion] || {"name": "Unknown Network", "colour": "black"};
	}

	static getContractProp(contractAddress, method, ...methodParams) {
		let web3 = Web3ConnectionHandler.instantiateWeb3Browser();
		let contract = web3.eth.contract(standardAbi).at(contractAddress);
		return new Promise((resolve, reject) => {
			contract[method](...methodParams, function(err, result){
				if(err) {
					reject(err);
				} else {
					resolve(result);
				}
			});
		});
	}
	static approveSpender(contractAddress, amount, spender = xplAddress) {
		let web3 = Web3ConnectionHandler.instantiateWeb3Browser();

		let contract = web3.eth.contract(standardAbi).at(contractAddress);	
		return new Promise((resolve, reject) => {
			contract["approve"].sendTransaction(spender, amount, function(err, txHash) {
					if (err) {
						reject(err);
					} else {
						resolve(txHash);
					}
			});
		});
	}
	static distributeToken(method, foreignContractAddress, addresses, amount, contractAddress = xplAddress) {

		let web3 = Web3ConnectionHandler.instantiateWeb3Browser();
		let contract = web3.eth.contract(standardAbi).at(contractAddress);
		return new Promise((resolve, reject) => {
			contract[method].sendTransaction(foreignContractAddress, addresses, amount, function(err, txHash) {
					if (err) {
						reject(err);
					} else {
						resolve(txHash);
					}
			})
		})	
	}
	static transferToken(address, amount, contractAddress) {

		let web3 = Web3ConnectionHandler.instantiateWeb3Browser();
		let contract = web3.eth.contract(standardAbi).at(contractAddress);
		
		return new Promise((resolve, reject) => {
			contract["transfer"].sendTransaction(address, amount, function(err, txHash) {
					if (err) {
						reject(err);
					} else {
						resolve(txHash);
					}
			})
		})	
	}
	static distributeEtherWithSplittedAmount(addresses, amount, contractAddress = xplAddress) {
		
		let web3 = Web3ConnectionHandler.instantiateWeb3Browser();
		let contract = web3.eth.contract(standardAbi).at(contractAddress);

		let totalAmount = amount.reduce(Misc.numberReducer);
		return new Promise((resolve, reject) => {
			contract["distributeEtherWithSplittedAmount"].sendTransaction(addresses, amount, {value: totalAmount}, function(err, txHash) {
					if (err) {
						reject(err);
					} else {
						resolve(txHash);
					}
			})
		})	
	}
	static distributeEtherWithUnifiedAmount(addresses, amount, contractAddress = xplAddress) {
		
		let web3 = Web3ConnectionHandler.instantiateWeb3Browser();
		let contract = web3.eth.contract(standardAbi).at(contractAddress);

		let totalAmount = (amount * addresses.length) * Math.pow(10, 18);
		
		return new Promise((resolve, reject) => {
			contract["distributeEtherWithUnifiedAmount"].sendTransaction(addresses, {value: totalAmount}, function(err, txHash) {
					if (err) {
						reject(err);
					} else {
						resolve(txHash);
					}
			})
		})	
	}
	static delay(ms = 5000) {
		return new Promise( resolve => setTimeout(resolve, ms));
	}
	static getMinedTransactionReceipt(txHash) {
		let web3 = Web3ConnectionHandler.instantiateWeb3Browser();
		return new Promise((resolve, reject) => {
			web3.eth.getTransactionReceipt(txHash, function(err, receipt) {
				if (receipt) {
					resolve(receipt);					
				} else if (err == null) {
					Web3ConnectionHandler.delay()
					.then(() => {
						resolve(Web3ConnectionHandler.getMinedTransactionReceipt(txHash));
					});
				} else {
					reject();
				}
			})
		})
	}
	static validateAddress(address) {
		if ( typeof address == "string" ) {

			return web3.isAddress(address);
		
		} else if ( address instanceof Array && address.length > 0 ) {
			
			return !address.some( (addr) => !web3.isAddress(addr) );
		
		} else {
			
			return false;
		
		}
	}

	static getAddressInfo() {
		let address = Web3ConnectionHandler.checkBrowserCompatibility().selectedAddress;
		let url = `http://api.ethplorer.io/getAddressInfo/${address}?apiKey=freekey`;
		return fetch(url).then(addrInfo => addrInfo.json());
	}
}
