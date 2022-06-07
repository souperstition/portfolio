import Hero from './components/Hero';
import './scss/index.scss';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Projects from './components/posts/Projects';
import Category from './components/posts/Category';

function App() {
	return (
		<div className="wrapper">
			<Header />
			<Routes>
				<Route path="/" element={<Hero />} />
				<Route path="/posts" element={<Projects />} />
				<Route path="/posts/:categoryName" element={<Category />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
