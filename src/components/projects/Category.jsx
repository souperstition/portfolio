import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getCategoryProject } from '../../services';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import Categories from './Categories';

const Category = () => {
	let params = useParams();

	const useReactQuery = () => {
		return useQuery('projects', () => getCategoryProject(params.categoryName));
	};

	const { data: projects, isLoading } = useReactQuery();

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
			{projects && (
				<>
				<h1>
				<span className="category-name">{params.categoryName}</span> Projects
			</h1>
			<motion.div className="cat-list" variants={container} initial="hidden" animate="show" exit="exit">
				<Link to="/projects">Show All</Link>
				<Categories currentCategory={params.categoryName} />
			</motion.div>

			<motion.div className="projects" variants={container} initial="hidden" animate="show" exit="exit">
				{projects.length === 0 ? (
					<div className="not-found">
						That category doesn't exist. <Link to="/projects">Back to Portfolio</Link>
					</div>
				) : (
					projects.map(project => <ProjectCard project={project.node} key={project.node.title} />)
				)}
			</motion.div>
				</>
			)}
			
		</motion.div>
	);
};

export default Category;
