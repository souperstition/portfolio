import React from 'react';
import '../../scss/portfolio/cards.scss';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
	return (
		<div className="card" style={{ backgroundImage: `url(${project.featuredImage.url})` }}>
			<div className="overlay">
				<div className="overlay-top slide">
					<h2 id="card-h2">
						<Link to={`/projects/${project.slug}`}>{project.title}</Link>
					</h2>
				</div>
				<div className="overlay-bottom slide">
					<p>{project.excerpt}</p>
					<Link className="project-link" to={`/projects/${project.slug}`}>
						Read More
					</Link>
					<div className="card-navigation">
						{project.demoLink && (
							<a href={`${project.demoLink}`} rel="noreferrer" target="_blank" className="demo-link">
								<i className="fa-solid fa-arrow-up-right-from-square" /> demo
							</a>
						)}
						<a href={`${project.codeLink}`} rel="noreferrer" target="_blank" className="demo-link">
							<i className="fa-brands fa-github" /> code
						</a>
					</div>
				</div>
			</div>
			<div className="categories">
				{project.categories.map((cat, index) => (
					<Link to={`/projects/categories/${cat.slug}`} key={index}>
						{cat.name}
					</Link>
				))}
			</div>
		</div>
	);
};

export default ProjectCard;
