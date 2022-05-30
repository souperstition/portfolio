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
	const images = [ bg1, bg2, bg3, bg4, bg5, bg6 ];
	let i = 0;

	useEffect(() => {
		body.style.backgroundImage = `url(${images[i]})`;

		window.setTimeout(() => {
			body.removeAttribute('class');
		}, 100);

		const interval = setInterval(() => {
			i++;
			if (i >= images.length) {
				i = 0;
			}

			body.style.backgroundImage = `url(${images[i]})`;
		}, 9000);
		return () => clearInterval(interval);
	}, []);

	return (
		<main>
			<header>
				<h1>hi, I'm dani. ❤️</h1>
				<p>I develop projects for e-learning and the web. Feel free to get in touch or browse my work: </p>
			</header>
			<Nav />
			<Footer />
		</main>
	);
};

export default Hero;
