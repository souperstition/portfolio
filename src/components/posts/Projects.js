import React, { useState, useEffect } from 'react';
import { getPosts } from '../../services';
import ProjectCard from './ProjectCard';
import Categories from './Categories';
import '../../scss/posts.scss';

const Projects = () => {
	const [ posts, setPosts ] = useState([]);
	const [ loading, setLoading ] = useState(true);
	useEffect(() => {
		getPosts()
			.then(res => {
				setPosts(res);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	return (
		<main className="projects-page">
			<h1>Portfolio</h1>
			<div className="cat-list">
				<Categories />
			</div>

			<div className="posts">{posts.map(post => <ProjectCard post={post.node} key={post.node.title} />)}</div>
		</main>
	);
};

export default Projects;
