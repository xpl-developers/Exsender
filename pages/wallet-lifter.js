import Page from '../layouts/Main';

import ComingSoon from '../components/ComingSoon';
import SubHeader from '../components/SubHeader';


class WalletLifter extends React.Component {
	
	render() {
		return (
			<Page>
				<SubHeader />
				<ComingSoon title="Wallet Lifter" />
			</Page>
		)
	}
}


export default WalletLifter;