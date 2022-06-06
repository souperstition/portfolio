import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<nav className="header-nav">
			<ul>
				<li>
					<Link to="/">it's dani ❤️</Link>
				</li>
			</ul>
			
		</nav>
	);
};

export default Header;
