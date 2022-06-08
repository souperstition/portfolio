import React from 'react';
import '../../scss/cards.scss';
import { Link } from 'react-router-dom';

const ProjectCard = ({ post }) => {
	return (
		<div className="card" style={{ backgroundImage: `url(${post.featuredImage.url})` }}>
			<div className="overlay">
				<div className="overlay-top slide">
					<h2>{post.title}</h2>
				</div>
				<div className="overlay-bottom slide">
					<p>{post.excerpt}</p>
					<div className="card-navigation">
						{post.demoLink && (
							<a href={`${post.demoLink}`} className="demo-link">
								<i className="fa-solid fa-arrow-up-right-from-square" /> demo
							</a>
						)}
						<a href={`${post.codeLink}`} className="demo-link">
							<i className="fa-brands fa-github" /> code
						</a>
					</div>
				</div>
			</div>
			<div className="categories">
				{post.categories.map((cat, index) => (
					<Link to={`/posts/${cat.slug}`} key={index}>
						{cat.name}
					</Link>
				))}
			</div>
		</div>
	);
};

export default ProjectCard;
