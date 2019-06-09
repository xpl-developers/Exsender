import Link from "next/link";
export default function Warning() {
	return (
		<div className="pt-2 content">
			<span className="has-text-danger">Please note:</span>
			<ul>
				<li>Recommended transfer per transaction is 180.</li>
				<li>Do not transfer to an exchange wallet.</li>
				<li>ETH distributor will not send to a contract address.</li>
				<li>
					Checkout 
					<Link href="/faq">
						 <a> FAQs </a>
					</Link> 
					for usage, approval transaction and slow Metamask.
				</li>
			</ul>
		</div>
	)
}