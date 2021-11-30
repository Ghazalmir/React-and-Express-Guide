import WeatherApp from './pages/page04/weather-app';
import Tutorial from './pages/page03/tutorial';
import Btn from './components/button/button'
import CustomNavbar from "./components/navbar/navbar";
import styles from './App.module.css';
import Footer from './components/footer/footer';
import { Routes, Route  } from "react-router-dom";
import Page5 from './pages/page05/page5';
import Page6 from './pages/page06/page6';
import Page1 from './pages/page01/page1';

function App() {
  return (
		<div>
			<CustomNavbar />
			<Routes>
				<Route path="/summary" element={<Page1 />} />
				<Route path="/tutorial" element={<Tutorial />} />
				<Route path="/demo" element={<WeatherApp />} />
				<Route path="/conslusion" element={<Page5 />} />
				<Route path="/credits" element={<Page6 />} />
			</Routes> 
      <Footer />
		</div>
  );
}

export default App;
