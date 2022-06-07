import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Categories from './Categories';
import ProjectCard from './ProjectCard';
import '../../scss/posts.scss';
import { getCategoryPost } from '../../services';

const Category = () => {
	let params = useParams();
	const [ posts, setPosts ] = useState([]);
	const [ loading, setLoading ] = useState(true);
	useEffect(() => {
		getCategoryPost(params.categoryName)
			.then(res => {
				setPosts(res);
			})
			.finally(() => {
				setLoading(false);
			});
	});

	return (
		<main className="projects-page">
			<h1>
				<span className="category-name">{params.categoryName}</span> Projects
			</h1>
			<div className="cat-list">
				<Link to="/posts">Show All</Link>
				<Categories currentCategory={params.categoryName} />
			</div>

			<div className="posts">{posts.map(post => <ProjectCard post={post.node} key={post.node.title} />)}</div>
		</main>
	);
};

export default Category;
