import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';

import ('../styles/styles.scss');


export default (props) => {
	return (
		<div>
			<Head>
				<meta key="viewport" name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous" />
				 <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
				<title>Automated token and ETH distributor on the blockchain</title>
			</Head>
			<Header />
				
			{props.children}
			<Footer />
		</div>
	)
}