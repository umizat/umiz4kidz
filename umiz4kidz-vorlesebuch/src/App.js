import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
const Home = lazy(() => import('./Pages/Home'));
const About = lazy(() => import('./Pages/About'));
const Vorlesebuecher = lazy(() => import('./Pages/Vorlesebuecher'));
const Woerterbuecher = lazy(() => import('./Pages/Woerterbuecher'));
const Vorlesebuch = lazy(() => import('./Pages/Vorlesebuch'));
const Woerterbuch = lazy(() => import('./Pages/Woerterbuch'));

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
					<Route path="/vorlesebuecher/:slug/:page" element={<Vorlesebuch />} />
					<Route path="/woerterbuecher" element={<Woerterbuecher />} />
					<Route path="/woerterbuecher/:slug/:page" element={<Woerterbuch />} />
				    <Route path="*" element={<NoMatch />} />
				</Routes>
			</Suspense>
		</>
	);
}

export default App;
