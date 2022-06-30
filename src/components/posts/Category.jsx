import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import '../../scss/posts.scss';
import { getCategoryPost } from '../../services';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import Categories from './Categories';

const Category = () => {
	let params = useParams();

	const useReactQuery = () => {
		return useQuery('posts', () => getCategoryPost(params.categoryName));
	};

	const { data: posts, isLoading } = useReactQuery();

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
			{isLoading && <div className='loading-div'>Loading...</div>}
			{posts && (
				<>
				<h1>
				<span className="category-name">{params.categoryName}</span> Projects
			</h1>
			<motion.div className="cat-list" variants={container} initial="hidden" animate="show" exit="exit">
				<Link to="/posts">Show All</Link>
				<Categories currentCategory={params.categoryName} />
			</motion.div>

			<motion.div className="posts" variants={container} initial="hidden" animate="show" exit="exit">
				{posts.length === 0 ? (
					<div className="not-found">
						That category doesn't exist. <Link to="/posts">Back to Portfolio</Link>
					</div>
				) : (
					posts.map(post => <ProjectCard post={post.node} key={post.node.title} />)
				)}
			</motion.div>
				</>
			)}
			
		</motion.div>
	);
};

export default Category;
