import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../../scss/posts.scss';
import { getCategoryPost } from '../../services';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import Categories from './Categories';

const Category = () => {
	let params = useParams();
	const [ posts, setPosts ] = useState([]);

	useEffect(
		() => {
			getCategoryPost(params.categoryName).then(res => {
				setPosts(res);
			});
		},
		[ params.categoryName ]
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

	const scroll = document.querySelector('html');
	useEffect(() => {
		scroll.setAttribute('style', 'overflow-y: hidden');

		window.setTimeout(() => {
			scroll.setAttribute('style', 'overflow-y: auto');
		}, 350);
	});

	return (
		<motion.div className="projects-page" variants={container} initial="hidden" animate="show" exit="exit">
			<h1>
				<span className="category-name">{params.categoryName}</span> Projects
			</h1>
			<div className="cat-list">
				<Link to="/posts">Show All</Link>
				<Categories currentCategory={params.categoryName} />
			</div>

			<div className="posts">
				{posts.length === 0 ? (
					<div className="not-found">
						That category doesn't exist. <Link to="/posts">Back to Portfolio</Link>
					</div>
				) : (
					posts.map(post => <ProjectCard post={post.node} key={post.node.title} />)
				)}
			</div>
		</motion.div>
	);
};

export default Category;
