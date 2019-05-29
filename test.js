class Web3ConnectionHandler {

	static checkBrowserCompatibility() {
		if (typeof window.ethereum !== 'undefined' || (typeof window.web3 !== 'undefined')) {
			return window['ethereum'] || window.web3.currentProvider;
		}
	}

	static async getBrowserProps() {
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
}


document.addEventListener('DOMContentLoaded', function loadHandler(e) {
	// body...
	document.getElementById('loaded').innerHTML = "Dom Loaded";
	
	let isAvail = document.getElementById('is-available');
	let isEnabled = document.getElementById('is-enabled');
	let accounts = document.getElementById('accounts');

	let prop = Web3ConnectionHandler.getBrowserProps();
	prop.then(function(p){
		console.log("p>>", p);
	}).catch(err=>{
		console.log("err>>>",err.message);
	})

	document.getElementById('connect').addEventListener('click', function(){

		let prop2 = Web3ConnectionHandler.getBrowserProps();
		prop2.then(function(p){
			console.log("p2>>", p);
		}).catch(err=>{
			console.log("err2>>>",err.message);
		})
		
	})

})