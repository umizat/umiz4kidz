import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
const Home = lazy(() => import('./Pages/Home'));
const About = lazy(() => import('./Pages/About'));
const Vorlesebuecher = lazy(() => import('./Pages/Vorlesebuecher'));
const Vorlesebuch = lazy(() => import('./Pages/Vorlesebuch'));
const NoMatch = lazy(() => import('./Components/NoMatch'));

function App() {
	return (
		<>
			<NavBar />
			<Suspense fallback={<div className="container">Loading...</div>}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/vorlesebuecher" element={<Vorlesebuecher />} />
					<Route path="/vorlesebuecher/:slug" element={<Vorlesebuch />} />
					<Route path="*" element={<NoMatch />} />
				</Routes>
			</Suspense>
		</>
	);
}

export default App;
