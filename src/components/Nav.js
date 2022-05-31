import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faCodepen, faFigma } from '@fortawesome/free-brands-svg-icons';
import { ReactComponent as FrontEndMentor } from '../img/frontend-mentor.svg';

const Nav = () => {
	return (
		<nav>
			<a href="https://www.linkedin.com/in/danielle-lyle/" aria-label="LinkedIn">
				<FontAwesomeIcon icon={faLinkedin} />
			</a>
			<a href="https://github.com/souperstition" aria-label="Github">
				<FontAwesomeIcon icon={faGithub} />
			</a>
			<a href="https://codepen.io/souperstition" aria-label="Codepen">
				<FontAwesomeIcon icon={faCodepen} />
			</a>
			<a href="https://www.figma.com/@souperstition" aria-label="Figma">
				<FontAwesomeIcon icon={faFigma} />
			</a>
			<a href="https://www.frontendmentor.io/profile/souperstition" aria-label="Frontend Mentor">
				<FrontEndMentor />
			</a>
		</nav>
	);
};

export default Nav;
