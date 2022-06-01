import Hero from './components/Hero';
import './scss/index.scss';
import Header from './components/Header';
import LinkList from './components/posts/LinkList';
import { Route, Routes } from 'react-router-dom';
import CreateLink from './components/posts/CreateLink';
import Footer from './components/Footer';
import Login from './components/posts/Login';
import Search from './components/posts/Search';

function App() {
	return (
		<div className="wrapper">
			<Header />
			<Routes>
				<Route path="/" element={<Hero />} />
				<Route path="/posts" element={<LinkList />} />
				<Route path="/new/:page" element={<LinkList />} />
				<Route path="/new" element={<CreateLink />} />
				<Route path="/login" element={<Login />} />
				<Route path="/search" element={<Search />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
