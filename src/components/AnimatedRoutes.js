/* eslint-disable import/first */
import React, { Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
const Hero = React.lazy(() => import('./Hero'));
const Projects = React.lazy(() => import('./posts/Projects'));
const Category = React.lazy(() => import('./posts/Category'));

import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {
	const location = useLocation();

	return (
		<AnimatePresence>
			<Suspense fallback={'Loading'}>
				<Routes location={location} key={location.pathname}>
					<Route path="/" element={<Hero />} />
					<Route path="/posts" element={<Projects />} />
					<Route path="/posts/:categoryName" element={<Category />} />
				</Routes>
			</Suspense>
		</AnimatePresence>
	);
};

export default AnimatedRoutes;
