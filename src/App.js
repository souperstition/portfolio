import './scss/index.scss';
import Header from './components/Header';
import Footer from './components/Footer';

import AnimatedRoutes from './components/AnimatedRoutes';

function App() {
	return (
		<div className="wrapper">
			<Header />
			<AnimatedRoutes />
			<Footer />
		</div>
	);
}

export default App;
