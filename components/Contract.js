export function ConnectedContractProps(props) {
	return (
		<div className="is-size-6 has-background-white border-left">
			<small>
			<b> Target Contract: </b>
			<span> {props.contractAddress || "input a valid contract address"}</span>
			<br/>
			<b>Name: </b> {props.contractName || "not available"}
			<br/>
			<b>Symbol: </b> {props.contractSymbol || "not available"}
			</small>
		</div>
	)
}
