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

			icon = <span> <span className="has-text-danger fas fa-times-circle"></span> <button className="button is-danger is-small" data-index={i} onClick={tx.onClick}> retry </button> </span>;
		}

		return (
			<p key={i}>
				{i+1}. <i>{tx.hash || "txhash unknown"}</i> 
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