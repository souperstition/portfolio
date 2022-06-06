import React, { useState, useEffect } from 'react';
import { getPosts } from '../../services';
import ProjectCard from './ProjectCard';

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

	return <main>{posts.map(post => <ProjectCard post={post.node} key={post.title} />)}</main>;
};

export default Projects;
