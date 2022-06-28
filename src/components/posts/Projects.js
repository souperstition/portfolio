import React, { useState, useEffect } from 'react';
import { getPosts } from '../../services';
import '../../scss/posts.scss';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import Categories from './Categories';

const Projects = () => {
	const [ posts, setPosts ] = useState([]);

	useEffect(() => {
		getPosts().then(res => {
			setPosts(res);
		});
	}, []);

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
		<motion.div className="projects-page" variants={container} initial="hidden" animate="show" exit="exit">
			<h1>Portfolio</h1>
			<motion.div className="cat-list" variants={container} initial="hidden" animate="show" exit="exit">
				<Categories />
			</motion.div>

			<motion.div className="posts" variants={container} initial="hidden" animate="show" exit="exit">
				{posts.map(post => <ProjectCard post={post.node} key={post.node.title} />)}
			</motion.div>
		</motion.div>
	);
};

export default Projects;
