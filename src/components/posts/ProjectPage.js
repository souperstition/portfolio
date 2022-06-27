import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProject } from '../../services';
import Categories from './Categories';
import ReactMarkdown from 'react-markdown';
import '../../scss/projectbody.scss';

const ProjectPage = () => {
	let params = useParams();
	const [ project, setProject ] = useState('');
	const [ isLoading, setIsLoading ] = useState(true);

	useEffect(
		() => {
			getProject(params.post)
				.then(res => {
					setProject(res);
				})
				.finally(() => setIsLoading(false));
		},
		[ params.post ]
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
		<motion.div variants={container} initial="hidden" animate="show" exit="exit">
			<h1>{project.title}</h1>
			<div className="cat-list">
				<Link to="/posts">Show All</Link>
				<Categories />
			</div>
			<hr />
			<motion.div className="post" variants={container} initial="hidden" animate="show" exit="exit">
				<h2>{project.title}</h2>
				<p>{project.excerpt}</p>
				{!isLoading && (
					<a href={project.featuredImage.url} target="_blank">
						<img alt={project.title} src={project.featuredImage.url} className="project-image" />
					</a>
				)}
				<ReactMarkdown className="post-body">{project.projectPost}</ReactMarkdown>
			</motion.div>
		</motion.div>
	);
};

export default ProjectPage;
