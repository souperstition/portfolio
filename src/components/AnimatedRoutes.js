import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Hero from './Hero';
import Projects from './projects/Projects';
import Category from './projects/Category';
import ProjectPage from './projects/ProjectPage';
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
					<Route path="/projects" element={<Projects />} />
					<Route path="/projects/categories/:categoryName" element={<Category />} />
					<Route path="/projects/:project" element={<ProjectPage />} />
				</Routes>
			</AnimatePresence>
		</QueryClientProvider>
	);
};

export default AnimatedRoutes;
