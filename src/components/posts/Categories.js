import React, { useState, useEffect } from 'react';
import { getCategories } from '../../services';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Categories = ({ currentCategory }) => {
	const [ categories, setCategories ] = useState([]);

	useEffect(() => {
		getCategories().then(newCategories => setCategories(newCategories));
	}, []);

	return (
		<motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
			{categories.map((category, index) => {
				if (category.name.toLowerCase() === currentCategory) {
					return '';
				} else {
					return (
						<Link to={`/posts/${category.slug}`} key={index}>
							{category.name}
						</Link>
					);
				}
			})}
		</motion.span>
	);
};

export default Categories;
