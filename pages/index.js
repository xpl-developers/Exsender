import Page from '../layouts/Main';
import Link from 'next/link';
import SocialLink from '../components/SocialLink';
import { Button } from '../components/FormElements';


function Index() {
	return (
		<Page>
			<Hero />		
		</Page>	
	)
}

function Hero() {
	return (
		<section className="hero is-medium is-link is-bold">
			<div className="hero-body">
				<div className="container">
					<div className="columns">
						<div className="column is-7 has-text-centered">
							<h1 className="title">
								Automated Distributor
							</h1>
							<h2 className="subtitle">
								Free, simplified and fully automated token and ETH distributor on the blockchain. Thirty thousands addresses in 59 minutes, no jokes!
							</h2>
							<p className="mb-4">
								<Link href="/token-distributor">
									<a className="button is-medium is-light is-outlined mr-2">
										open app
									</a>
								</Link>
								<Link href="/faq">
									<a className="button is-medium is-warning is-outlined mr-2">how to use
									</a>
								</Link>
							</p>
							<p>
								<SocialLink 
									size="3" 
									classList="has-text-grey-lighter mr-4"
								/>
							</p>
						</div>
						<div className="column">
							<div className="box">
								Exsender is developed to save time, gas and energy consumption on the blockchain. Token distribution has never been this simplified, sending token to thousands of addresses consumes lots of gas and time. <br/>Exsender automate this process by bundling hundreds of transfer in one single transaction. Just drop in addresses, send transaction, sit back, relax and watch. We have distributed to 20k addresses in 30 minutes.
							</div>
						</div>
					</div>
					
				</div>	
			</div>
		</section>
	)
}

export default Index;