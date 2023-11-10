import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Vokabeltrainer from './Pages/Vokabeltrainer';
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
					<Route path="/vorlesebuecher/:slug" element={<Vorlesebuch />} />
					<Route path="/woerterbuecher" element={<Woerterbuecher />} />
					<Route path="/woerterbuecher/:slug" element={<Woerterbuch />} />
					<Route path="/woerterbuecher/:slug/:page" element={<Woerterbuch />} />
					<Route path="/mitlesebuecher" element={<Mitlesebuecher />} />
					<Route path="/mitlesebuecher/:slug" element={<Mitlesebuch />} />
					<Route path="/mitlesebuecher/:slug/:page" element={<Mitlesebuch />} />
					<Route path="/vokabeltrainer" element={<Vokabeltrainer />} />
					<Route path="/vokabeltrainer/:slug" element={<Vokabeltrainer />} />
				    <Route path="*" element={<NoMatch />} />
				</Routes>
			</Suspense>
			<div className='footer'>
				
			<a href="/">
							<img src="https://umiz4kids.at/umizfoto.jpg" alt="UMIZ" className='umizFooter'/>
						</a>
						<br></br>
				UMIZ - Ungarisches Medien- und Informationszentrum / Beirat für mehrsprachige Kindergartenpädagogik <br></br>
7502 Unterwart, Marienplatz 3
www.umiz at - umizmail@gmail.com <br>
</br>



 <a href="/">Impressum und Datenschutzerklärung
												</a> 
<br></br>
<a href='https://www.bundeskanzleramt.gv.at/themen/volksgruppen.html' target='_blank'>
<img src="https://umiz4kids.at/logo-ministerium.png" alt='Logo-Bundeskanzleramt'  className='bkaFooter'/></a>
<h5>Gefördert aus Mitteln der Volksgruppenförderung des Bundeskanzleramtes
</h5>
			</div>
		</>
	);
}

export default App;
