import WeatherApp from './pages/page04/weather-app';
import Tutorial from './pages/page03/tutorial';
import Btn from './components/button/button'
import CustomNavbar from "./components/navbar/navbar";
import styles from './App.module.css';
import Footer from './components/footer/footer';
import { Routes, Route, Link } from "react-router-dom";
import Page5 from './pages/page05/page5';
import Page6 from './pages/page06/page6';
// can comment pages out as they are just there for testing purposes
function App() {
  return (
		<div>
			{/* <nav className={styles.nav}>
				<Link to="/page-1">Page 1</Link>
				<Link to="/tutorial">Tutorial</Link>
				<Link to="/demo">Weather App</Link>
			</nav> */}
			<CustomNavbar />
			<Routes>
				<Route path="/tutorial" element={<Tutorial />} />
				<Route path="/demo" element={<WeatherApp />} />
			</Routes> 
		</div>
  );
}

export default App;
