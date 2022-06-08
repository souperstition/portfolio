import { useEffect, useState } from 'react';
import Nav from './Nav';
import bg1 from '../img/bg01.jpg';
import bg2 from '../img/bg02.jpg';
import bg3 from '../img/bg03.jpg';
import bg4 from '../img/bg04.jpg';
import bg5 from '../img/bg05.jpg';
import bg6 from '../img/bg06.jpg';
import { Link } from 'react-router-dom';

const Hero = () => {
	const body = document.querySelector('#bg');
	const [ index, setIndex ] = useState(1);

	useEffect(
		() => {
			const images = [ bg1, bg2, bg3, bg4, bg5, bg6 ];
			window.setTimeout(() => {
				body.removeAttribute('class');
			}, 100);

			const interval = setInterval(() => {
				setIndex(index + 1);
				if (index >= images.length - 1) {
					setIndex(0);
				}

				body.style.backgroundImage = `url(${images[index]})`;
			}, 6000);
			return () => clearInterval(interval);
		},
		[ body, index ]
	);

	return (
		<main className="hero">
			<h1>what will we dream up today?</h1>
			<p>I develop stuff for e-learning and the web. Feel free to get in touch or browse my work: </p>
			<Link to="/posts" className="btn">
				See My Projects
			</Link>
			<Nav />
		</main>
	);
};

export default Hero;
