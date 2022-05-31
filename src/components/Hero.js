import { useEffect, useState } from 'react';
import Footer from './Footer';
import Nav from './Nav';
import bg1 from '../img/bg01.jpg';
import bg2 from '../img/bg02.jpg';
import bg3 from '../img/bg03.jpg';
import bg4 from '../img/bg04.jpg';
import bg5 from '../img/bg05.jpg';
import bg6 from '../img/bg06.jpg';

const Hero = () => {
	const body = document.querySelector('body');
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
		<main>
			<header>
				<h1>what will we dream up together?</h1>
				<p>I develop stuff for e-learning and the web. Feel free to get in touch or browse my work: </p>
			</header>
			<Nav />
			<Footer />
		</main>
	);
};

export default Hero;
