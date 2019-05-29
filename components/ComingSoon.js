export default function ComingSoon(props) {
	return (
		<section className="halfpage-height">
			<div className="container pl-4 pr-4 mt-4 pb-4">
				<h1 className="is-size-3 has-text-centered">{props.title}</h1>
				<div className="columns">
					<div className="column center-align mt-4 pt-4">
						<div className="is-size-4"> 
							<p>This feature is currently in development.</p>
							<br/>
							<i className="fa fa-terminal fa-2x has-text-link"></i><br/>
							<button 
								className="button is-light is-large mt-4"
							>
							Coming Soon!
							</button>
						</div>
					</div>
				</div>			
			</div>
		</section>
		)
}