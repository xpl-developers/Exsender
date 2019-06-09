export function TransactionMonitor(props) {
	if (!props.monitorArray instanceof Array || props.monitorArray.length < 1) {
		return(
			<div className="custom-overlay box">
				<i 
					className="is-pulled-right is-small button fas fa-times"
					onClick={props.onClick}
				>
				</i>
				<p>No transaction found</p>
			</div>
		)
	} 

	let transactionList = props.monitorArray.map( (tx, i) => {
		let icon;
		if (tx.status == "pending") {
			icon = <span className="has-text-link fas fa-exclamation-circle"></span>;

		} else if (tx.status == "processing") {
		
			icon = <span className="has-text-primary fas fa-spinner fa-spin"></span>;
		
		} else if (tx.status == "success") {
		
			icon = <span className="has-text-success fas fa-check-circle"></span>;
		
		} else {

			icon = <span> <span className="has-text-danger fas fa-times-circle"></span> <button className="button is-danger is-small" data-index={i.toString()} onClick={tx.onClick}> retry </button> <button className="button is-warning is-small" data-index={(i+1).toString()} onClick={tx.onClick}> try next </button> </span>;
		}
		let lifting = "";
		if (tx.name || tx.symbol || tx.balance) {
			lifting = `${tx.name || ""} (${(tx.balance || 0) / Math.pow(10, (tx.decimals || 0))} ${tx.symbol || ""}) -`;
		}
		return (
			<p key={i}>
				{i+1}. <i>{lifting} {(tx.lift ? tx.hash : "skipped") || "txhash unknown"}</i> 
				&nbsp; {icon}
			</p>
		);
	} )

	return (
		<div className="custom-overlay box">
			<i 
				className="is-pulled-right is-small button fas fa-times"
				onClick={props.onClick}
			>
			</i>
			{transactionList}
		</div>
	)
}