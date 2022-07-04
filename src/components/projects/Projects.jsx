import React from 'react';
import { getProjects } from '../../services';
import '../../scss/portfolio/index.scss';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import Categories from './Categories';
import { useQuery } from 'react-query';

const Projects = () => {
	const useReactQuery = () => {
		return useQuery('projects', () => getProjects());
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
			{
			isLoading && <div className='loading-div'>Loading...</div> 
		}
			{
				projects && (
					<>
						<h1>Portfolio</h1>
						<motion.div className="cat-list" variants={container} initial="hidden" animate="show" exit="exit">
							<Categories />
						</motion.div>

						<motion.div className="projects" variants={container} initial="hidden" animate="show" exit="exit">
							{projects.map(project => <ProjectCard project={project.node} key={project.node.title} />)}
						</motion.div>
					</>
				)}
		</motion.div>
	
	);
};

export default Projects;
