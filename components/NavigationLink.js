import Link from 'next/link';

class NavigationLink extends React.Component {
	
	/*componentDidMount() {
		this.location = window.location.pathname;
	}
*/
	render() {
		// console.log("this.location",this.location)
		let navLinks;

		if (this.props.type){

			navLinks = this.props.linkList.map((lk, index) => (
				<li key={index} className={this.location == lk.link ? "is-active" : null}>
					<Link href={lk.link}>
						<a className={this.props.classList || ""}> {lk.name} </a>
					</Link>
				</li>
			));
			return <ul> {navLinks} </ul>;
		}
		navLinks = this.props.linkList.map((lk, index) => (
			<Link href={lk.link} key={index}>
				<a className={this.props.classList || ""}> {lk.name} </a>
			</Link>
		))

		return (
			navLinks
		);
	}
}



export default NavigationLink;