import Page from '../layouts/Main';

import SubHeader from '../components/SubHeader';


class Faq extends React.Component {
	render() {
		let faqs = questionsAndAnswers().map((qa, i) => {
			return <FaqContainer key={i} {...qa} />
		})
		return (
			<Page>
				<SubHeader />
				<section className="halfpage-height container">
					<h3 className="is-size-5">Frequently Asked Questions</h3>
					<p>Here, you'll find answers to common questions. Otherwise contact us through our social channel.</p>
					<div className="mb-4 mt-4">
						{faqs}
					</div>
					
				</section>
			</Page>
		)
	}
}

function FaqContainer(props) {
	function toggleDisplay(e) {
		let element = e.target;
		element.nextSibling.classList.toggle("is-hidden");
	}
	let frag = {__html: props.answer};
	return (
		<div className="mb-2 br-2" style={{border: ".5px solid #eee"}}>
			<h3 className="pl-1 pr-1 pt-1 pb-1 is-size-5 has-background-light pointer" onClick={toggleDisplay}>
				<i className="fa fa-angle-right"></i>
				 &nbsp;{props.question}

			</h3>
			<p className="is-hidden pl-3 pr-3 pt-3 pb-3" dangerouslySetInnerHTML={frag}></p>
		</div>
	)
}

function questionsAndAnswers() {
	return [
		{
			question: "How do I use the Token Distributor?",
			answer: "Input the token contract address - the distributor will fetch the name, symbol, decimal of the token and your balance. This is to ensure that you're interacting with the right contract. <br/><br/> Input the amount of token you want to send - please read about <b>Unified Amount</b> and <b>Splitted Amount</b> below. <br/><br/> Input a comma separated addresses you want to send token - example<br/> <code>0x0C3AB3Cb662DA997592cEB18D357a07Fc898cB2B, 0x2d213012e19f1433cb394ae6faba1c6a71ad1690, 0xc77b37e9a9061814d4e5d93f19c757966a4e6907, 0xa1a3773730349f1143eb03e35abfc39690f0d411</code> <br/> <b>You can input unlimited number of addresses.</b> <br/><br/> Read about <b>importing addresses and amount below</b><br/><br/> Click on 'Send Transaction' - You will need to approve our contract to send token on your behalf. Please read about <b>approval transaction</b> below."
		},
		{
			question: "How to import addresses and or amount from file?",
			answer: "The distributor accept Excel and JSON file format. The column containing the addresses must be named <b>address or addresses</b> while the amount column must be <b>amount or amounts</b>. <br/><br/> <b>Excel sample</b><br/> <br/> <img src='/static/excel_sample.png' alt='Excel file sample' width='700' /><br/><br/> <b>JSON sample</b><br/><br/> <img src='/static/json_sample.png' alt='JSON file sample' width='600' /><br/><br/> Click on 'Import data' to select the file containing the content, the field for addresses will be auto populated with the eth addresses in the file. The 'amount of token' will be populated if 'Splitted amount' is the selected option."
		},
		{
			question: "What is 'Unified Amount'?",
			answer: "Unified Amount - simply means you're sending the same amount of token to all addresses. <br/><br/> For instance, you're sending <code>350</code> XPL token to these addresses <code>0x0C3AB3Cb662DA997592cEB18D357a07Fc898cB2B, 0x2d213012e19f1433cb394ae6faba1c6a71ad1690, 0xc77b37e9a9061814d4e5d93f19c757966a4e6907, 0xa1a3773730349f1143eb03e35abfc39690f0d411</code><br/> totalling <code>(350 * 4) 1400</code> XPL token.<br/><br/><b>Please note: </b> The amount of token field will not be populated from Excel/JSON file if Unified Amount is the selected option."
		},
		{
			question: "What is 'Splitted Amount'?",
			answer: "Splitted Amount - simply means you're sending different amount of token to different addresses.<br/> You must provide corresponding amount for each address. <br/><br/>For instance, you have these addresses</br/><code>0x0C3AB3Cb662DA997592cEB18D357a07Fc898cB2B, 0x2d213012e19f1433cb394ae6faba1c6a71ad1690, 0xc77b37e9a9061814d4e5d93f19c757966a4e6907, 0xa1a3773730349f1143eb03e35abfc39690f0d411</code><br/><br/>then you should provide corresponding amount similar to this<br/> <code>343, 8938, 215, 456</code>"
		},
		{
			question: "What is the maximum number of addresses?",
			answer: "You can input unlimited amount of addresses. The distributor will automatically chunk the addresses into batches based on the 'transfer per transaction' you have selected. <br/> The distributor will wait for confirmation of each transaction before sending the next batch if available.<br/> Lets assume that you have <code>10000</code> addresses and 'transfer per transaction' is <code>150</code> then you'll have approximately <code> 67 (10000/150) </code> transactions."
		},
		
		{
			question: "What is 'transfer per transaction'?",
			answer: "This is the number of tranfer in a single transaction. The default is <code>180</code> and you might need to reduce it if your transaction keep failing due to congestion on the Ethereum network. <br/><br/> Lets assume that you have <code>10000</code> addresses and 'transfer per transaction' is <code>150</code> then you'll have approximately <code> 67 (10000/150) </code> transactions."
		},
		{
			question: "What is the 'approval transaction'?",
			answer: "Approval transaction is the transaction that grant our smart contract the permission to spend some amount of your token. After granting the permission, our smart contract can only spend if you initiate the transaction. You can <a href='https://theethereum.wiki/w/index.php/ERC20_Token_Standard#Approve_And_TransferFrom_Token_Balance' target='_blank'>read more</a> about it.<br/><br/> By default, we requested approval to spend up to your total balance so you wouldn't have to approve again."
		},
		{
			question: "Do I need to approve before every transaction?",
			answer: "No. You only need to approve once.<br/><br/> By default, we requested approval to spend up to your total balance so you wouldn't have to approve again."
		},
		{
			question: "Why is my transaction keep failing?",
			answer: "If you experience this, please consider reducing the 'transfer per transaction'. Try <code>150</code> or <code>175</code>"
		},
		/*{
			question: "Why is the 'approval transaction' failing?",
			answer: ""
		},*/
		{
			question: "What is 'Monitor'?",
			answer: "Monitor is the container that display the status of your transactions. You can track the progress of each transaction within the monitor container."
		},
		{
			question: "How to retry a failed transaction?",
			answer: "If your transaction fail, click on 'retry' button within the monitor container. The transaction will continue from where it stopped last time."
		},
		{
			question: "How much does it cost to use the app?",
			answer: "It is free to use. Consider supporting us by donating, we appreciate it a lot.<br/><br/> ETH: 0xfe3da3708036aec603a8cc9538ac98ce8358a558 <br/>BTC: 39ydztrvFDzE4xnygLojgijGg81J4foTVA"
		},
		{
			question: "Why is my balance showing zero?",
			answer: "Please double check that you're connected to the intended network."
		},
		
		{
			question: "Which network is supported?",
			answer: "The following networks are supported.<br/><br/>Ethereum Main Network<br/>Ropsten Test Network<br/>"
		},
		{
			question: "Metamask is very slow, what can I do?",
			answer: "<b>Please note:</b> Backup your secret phrase.<br/> You should reset Metamask transaction history. We have tried this several times and it works.<br/> To reset, open Metamask -> Settings -> Advance -> Reset Account. "
		},
		{
			question: "Do I need to confirm every transaction on Metamask?",
			answer: "Yes. For now, there's no way around that. We are considering making an offline version that can work with private key and you wouldn't have to confirm every transaction. Stay tuned for update."
		},
	]		
}

export default Faq;