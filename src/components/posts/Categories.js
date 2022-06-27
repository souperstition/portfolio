import React, { useState, useEffect } from 'react';
import { getCategories } from '../../services';
import { Link } from 'react-router-dom';

const Categories = ({ currentCategory }) => {
	const [ categories, setCategories ] = useState([]);

	useEffect(() => {
		getCategories().then(newCategories => setCategories(newCategories));
	}, []);

	return (
		<span>
			{categories.map((category, index) => {
				if (category.name.toLowerCase() === currentCategory) {
					return '';
				} else {
					return (
						<Link to={`/posts/categories/${category.slug}`} key={index}>
							{category.name}
						</Link>
					);
				}
			})}
		</span>
	);
};

export default Categories;
