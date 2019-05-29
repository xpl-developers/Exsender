import { Web3ConnectionHandler } from '../utils/web3-connect';

export function LockedWeb3Browser(props) {
	return (
		<section className="halfpage-height">
			<div className="container pl-4 pr-4 mt-4 pb-4">
				<h1 className="is-size-3 has-text-centered">Token Distributor</h1>
				<div className="columns center-align">
					<div className="column pt-4 mt-4">
						<p className="is-size-4"> Please unlock Metamask to continue.</p><br/>
						{props.children}
					</div>
				</div>			
			</div>
		</section>
	)
}

export function NoWeb3Browser() {
	return (
		<section className="halfpage-height">
			<div className="container pl-4 pr-4 mt-4 pb-4">
				<h1 className="is-size-3 has-text-centered">Token Distributor</h1>
				<div className="columns">
					<div className="column center-align mt-4 pt-4">
						<p className="is-size-4"> 
							This feature requires Metamask to be installed.<br/>
							<a 
								className="button is-danger is-large"
								href="https://metamask.io"
								target="_blank"
								>
							Download Metamask
							</a>
						</p>
					</div>
				</div>			
			</div>
		</section>
		)
}


export function Web3ConnectionProps() {
	if (!Web3ConnectionHandler.checkBrowserCompatibility()) {
		return null
	}
	let network = Web3ConnectionHandler.connectedNetwork();
	return (
		<ul className="is-right">				
			<li>
				<span className={`tag is-medium is-${network.colour || "danger"}`}>
				{network.name || "Unknown Network"}
				</span>
			</li>
			<li>
				<span className="tag is-medium is-white">
				{Web3ConnectionHandler.checkBrowserCompatibility().selectedAddress}
				</span>
			</li>

		</ul>
	)
}