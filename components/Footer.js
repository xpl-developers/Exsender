import appConfig from '../app.config';
import NavigationLink from './NavigationLink';
import SocialLink from './SocialLink';

let Footer = () => {

	return (
		<footer className="footer">
			<div className="columns">
				<div className="column">
					<p className="is-size-5">
						{appConfig.name} by <a href={appConfig.website} target="_blank">{appConfig.author}</a>
					</p>
					<p className="is-size-6">
						<a href={appConfig.termsOfService.link} target="_blank">
							{appConfig.termsOfService.name}
						</a><br/>
						<a href={appConfig.privacyPolicy.link} target="_blank">
							{appConfig.privacyPolicy.name}
						</a>
					</p>
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