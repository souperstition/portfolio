import React from 'react';

const ProjectCard = ({ post }) => {
	return (
		<div className="post-preview">
			<img className="featured" src={post.featuredImage.url} alt={post.title} />
			<div className="overlay">
				<h2>
					<a href={`/post/${post.slug}`}>{post.title}</a>
				</h2>

				<div className="author">
					<img src={post.author.photo.url} alt={post.author.name} height="30px" width="30px" />
					<p>{post.author.name}</p>
				</div>
				<p>{post.excerpt}</p>
			</div>
		</div>
	);
};

export default ProjectCard;
