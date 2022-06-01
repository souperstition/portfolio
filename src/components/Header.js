import { Link, useNavigate } from 'react-router-dom';
import { AUTH_TOKEN } from '../constants';

const Header = () => {
	const navigate = useNavigate();
	const authToken = localStorage.getItem(AUTH_TOKEN);
	return (
		<nav className="header-nav">
			<ul>
				<li>
					<Link to="/">it's dani ❤️</Link>
				</li>
				<li>
					<Link to="/posts">projects</Link>
				</li>
				{authToken && (
					<li>
						<Link to="/new">add</Link>
					</li>
				)}
			</ul>
			{authToken ? (
				<div
					className="ml1 pointer black"
					onClick={() => {
						localStorage.removeItem(AUTH_TOKEN);
						navigate(`/`);
					}}
				>
					logout
				</div>
			) : (
				<Link to="/login" className="ml1 no-underline black">
					login
				</Link>
			)}
		</nav>
	);
};

export default Header;
