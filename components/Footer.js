import appConfig from '../app.config';
import NavigationLink from './NavigationLink';
import SocialLink from './SocialLink';

let Footer = () => {

	return (
		<footer className="footer has-background-light">
			<div className="columns">
				<div className="column">
					<p className="is-size-5">
						{appConfig.name} by <a href={appConfig.website} target="_blank">{appConfig.author}</a>
					</p><br/>
					<SocialLink />
				</div>
				<div className="column">
					{appConfig.donation.message}<br/><br/>
					BTC: <span> {appConfig.donation.btc} </span><br/>
					ETH: <span> {appConfig.donation.eth} </span><br/>
				</div>
			</div>
		</footer>
	)
}

export default Footer;