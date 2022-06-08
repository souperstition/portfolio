import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Projects from './posts/Projects';
import Category from './posts/Category';
import Hero from './Hero';

import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {
	const location = useLocation();

	return (
		<AnimatePresence>
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<Hero />} />
				<Route path="/posts" element={<Projects />} />
				<Route path="/posts/:categoryName" element={<Category />} />
			</Routes>
		</AnimatePresence>
	);
};

export default AnimatedRoutes;
