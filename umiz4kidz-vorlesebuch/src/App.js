import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
const Home = lazy(() => import('./Pages/Home'));
const About = lazy(() => import('./Pages/About'));
const Vorlesebuecher = lazy(() => import('./Pages/Vorlesebuecher'));
const Woerterbuecher = lazy(() => import('./Pages/Woerterbuecher'));
const Mitlesebuecher = lazy(() => import('./Pages/Mitlesebuecher'));
const Vorlesebuch = lazy(() => import('./Pages/Vorlesebuch'));
const Woerterbuch = lazy(() => import('./Pages/Woerterbuch'));
const Mitlesebuch = lazy(() => import('./Pages/Mitlesebuch'));

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
					<Route path="/mitlesebuecher" element={<Mitlesebuecher />} />
					<Route path="/mitlesebuecher/:slug/:page" element={<Mitlesebuch />} />
				    <Route path="*" element={<NoMatch />} />
				</Routes>
			</Suspense>
			<div className='footer'>
				
			<a href="/">
							<img src="umizfoto.jpg" alt="UMIZ" height="50" width="50" class="padding"/>
						</a>
				UMIZ - Ungarisches Medien- und Informationszentrum Beirat für mehrsprachige Kindergartenpädagogik
7502 Unterwart, Marienplatz 3
www.umiz at - umizmail@gmail.com - <a href="/">Impressum und Datenschutzerklärung
												</a> 
<br></br>
<h5>Gefördert aus Mitteln der Volksgruppenförderung des Bundeskanzleramtes
</h5>
			</div>
		</>
	);
}

export default App;
