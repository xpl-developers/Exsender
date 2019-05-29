import Page from '../layouts/Main';

import ComingSoon from '../components/ComingSoon';
import SubHeader from '../components/SubHeader';


class EthDistributor extends React.Component {
	
	render() {
		return (
			<Page>
				<SubHeader />
				<ComingSoon title="ETH Distributor" />
			</Page>
		)
	}
}


export default EthDistributor;