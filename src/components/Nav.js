import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faCodepen, faFigma } from '@fortawesome/free-brands-svg-icons';
import { ReactComponent as FrontEndMentor } from '../img/frontend-mentor.svg';

const Nav = () => {
	return (
		<nav>
			<a href="https://www.linkedin.com/in/danielle-lyle/">
				<FontAwesomeIcon icon={faLinkedin} />
			</a>
			<a href="https://github.com/souperstition">
				<FontAwesomeIcon icon={faGithub} />
			</a>
			<a href="https://codepen.io/souperstition">
				<FontAwesomeIcon icon={faCodepen} />
			</a>
			<a href="https://www.figma.com/@souperstition">
				<FontAwesomeIcon icon={faFigma} />
			</a>
			<a href="https://www.frontendmentor.io/profile/souperstition">
				<FrontEndMentor />
			</a>
		</nav>
	);
};

export default Nav;
