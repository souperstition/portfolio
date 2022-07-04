import { useEffect, useState } from 'react';
import Nav from './Nav';
import bg1 from '../img/bg01.jpg';
import bg2 from '../img/bg02.jpg';
import bg3 from '../img/bg03.jpg';
import bg4 from '../img/bg04.jpg';
import bg5 from '../img/bg05.jpg';
import bg6 from '../img/bg06.jpg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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

	const container = {
		hidden: {
			opacity: 0
		},
		show: {
			opacity: 1,
			transition: {
				duration: 0.25
			}
		},
		exit: {
			opacity: 0
		}
	};

	return (
		<motion.div className="hero" variants={container} initial="hidden" animate="show" exit="exit">
			<h1>what will we dream up today?</h1>
			<p>I develop stuff for e-learning and the web. Feel free to get in touch or browse my work: </p>
			<div className="hero-buttons">
				<Link to="/projects" className="btn">
					See My Projects
				</Link>
				<Nav />
			</div>
		</motion.div>
	);
};

export default Hero;
