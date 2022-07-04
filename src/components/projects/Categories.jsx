import React from 'react';
import { getCategories } from '../../services';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';

const Categories = ({ currentCategory }) => {

	const useReactQuery = () => {
		return useQuery('categories', () => getCategories());
	};

	const { data: categories } = useReactQuery();

	return (
		<span>
			{categories && (
				<>
				{categories.map((category, index) => {
					if (category.name.toLowerCase() === currentCategory) {
						return '';
					} else {
						return (
							<Link to={`/projects/categories/${category.slug}`} key={index}>
								{category.name}
							</Link>
						);
					}
				})}
				</>
			)}
		</span>
	);
};

export default Categories;
