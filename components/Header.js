import Link from 'next/link';
import NavigationLink from './NavigationLink';
import Logo from './Logo';
import appConfig from '../app.config';


let MainNavigation = () => {
	return (
		<nav className="navbar is-light pt-2 pb-2">
			<div className="navbar-brand">
				<Link href="/">
					<a className="navbar-item">
						<Logo />
						<span className="is-size-4 has-text-link"> Exsender </span>
					</a>
				</Link>
				<div className="navbar-burger burger" data-target="mainNav" onClick={toggleMenu}>
			      <span aria-hidden="true"></span>
			      <span aria-hidden="true"></span>
			      <span aria-hidden="true"></span>
			    </div>
			</div>

			<div id="mainNav" className="navbar-menu">
				<div className="navbar-end is-size-6">
					<NavigationLink 
						linkList={appConfig.navLink}
						classList="navbar-item"
					/>
				</div>
			</div>
		</nav>
	)
}

function toggleMenu(e) {
	let burger = e.target;
	let menu = e.target.getAttribute('data-target');

	let target = document.getElementById(menu);
	if (target) {
		target.classList.toggle('is-active');
		burger.classList.toggle('is-active');
	}
	
}

export default MainNavigation;