import React from 'react';
import '../../scss/cards.scss';
import { Link } from 'react-router-dom';

const ProjectCard = ({ post }) => {
	return (
		<div className="card" style={{ backgroundImage: `url(${post.featuredImage.url})` }}>
			<div className="overlay">
				<div className="overlay-top slide">
					<h2 id="card-h2">
						<Link to={`/posts/${post.slug}`}>{post.title}</Link>
					</h2>
				</div>
				<div className="overlay-bottom slide">
					<p>{post.excerpt}</p>
					<Link className="post-link" to={`/posts/${post.slug}`}>
						Read More
					</Link>
					<div className="card-navigation">
						{post.demoLink && (
							<a href={`${post.demoLink}`} rel="noreferrer" target="_blank" className="demo-link">
								<i className="fa-solid fa-arrow-up-right-from-square" /> demo
							</a>
						)}
						<a href={`${post.codeLink}`} rel="noreferrer" target="_blank" className="demo-link">
							<i className="fa-brands fa-github" /> code
						</a>
					</div>
				</div>
			</div>
			<div className="categories">
				{post.categories.map((cat, index) => (
					<Link to={`/posts/categories/${cat.slug}`} key={index}>
						{cat.name}
					</Link>
				))}
			</div>
		</div>
	);
};

export default ProjectCard;
