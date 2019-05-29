import NavigationLink from './NavigationLink';
import appConfig from '../app.config';
import { Web3ConnectionProps } from './Web3Status';


let SubHeader = () => {
	return (
		<div className="tabs pt-2 pb-2">
			<NavigationLink
				linkList={appConfig.subNavLink}
				type="li"
			/>
			<Web3ConnectionProps />
		</div>
	)
}


export default SubHeader;