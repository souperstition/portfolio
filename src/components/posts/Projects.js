import React, { useState, useEffect } from 'react';
import { getPosts } from '../../services';
import ProjectCard from './ProjectCard';
import Categories from './Categories';
import '../../scss/posts.scss';
import { motion } from 'framer-motion';

const Projects = () => {
	const [ posts, setPosts ] = useState([]);
	useEffect(() => {
		getPosts().then(res => {
			setPosts(res);
		});
	}, []);

	const container = {
		hidden: { opacity: 0.5 },
		show: {
			opacity: 1,
			transition: {
				duration: 1,
				delayChildren: 0.5
			}
		}
	};

	const item = {
		hidden: { opacity: 0 },
		show: { opacity: 1 }
	};

	const heroDiv = document.querySelector('.hero');
	const projectsDiv = document.querySelector('.projects-page');

	return (
		<motion.div className="projects-page" variants={container} initial="hidden" animate="show" exit="hidden">
			<motion.h1 variants={item}>Portfolio</motion.h1>
			<motion.div variants={item} className="cat-list">
				<Categories />
			</motion.div>

			<motion.div variants={item} className="posts">
				{posts.map(post => <ProjectCard post={post.node} key={post.node.title} />)}
			</motion.div>
		</motion.div>
	);
};

export default Projects;
