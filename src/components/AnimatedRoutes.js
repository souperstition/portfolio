/* eslint-disable import/first */
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Hero from './Hero';
import Projects from './posts/Projects';
import Category from './posts/Category';
import ProjectPage from './posts/ProjectPage';
import { AnimatePresence } from 'framer-motion';
import { QueryClient, QueryClientProvider } from 'react-query';

const AnimatedRoutes = () => {
	const location = useLocation();

	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			<AnimatePresence exitBeforeEnter>
				<Routes location={location} key={location.pathname}>
					<Route path="/" element={<Hero />} />
					<Route path="/posts" element={<Projects />} />
					<Route path="/posts/categories/:categoryName" element={<Category />} />
					<Route path="/posts/:post" element={<ProjectPage />} />
				</Routes>
			</AnimatePresence>
		</QueryClientProvider>
	);
};

export default AnimatedRoutes;
