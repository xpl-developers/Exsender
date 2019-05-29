export default function LoadingIndicator() {
	return (
		<p>
			<button className="button is-text is-link is-large is-loading">loading</button>
		</p>
	)
}


export function LoadingSpinner() {
	return (
		<p>
			<span className="has-text-link fas fa-spinner fa-spin is-size-3"></span>
		</p>
	)
}

