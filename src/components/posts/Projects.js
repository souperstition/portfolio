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
		hidden: { opacity: 0.5 },
		show: {
			opacity: 1,
			transition: {
				duration: 0.35
			}
		}
	};

	const item = {
		hidden: { opacity: 0 },
		show: { opacity: 1 }
	};

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
