import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';

import ('../styles/styles.scss');


export default (props) => {
	return (
		<div>
			<Head>
				<title>Automated token and ETH distributor on the blockchain</title>
			</Head>
			<Header />
				{props.children}
			<Footer />
		</div>
	)
}