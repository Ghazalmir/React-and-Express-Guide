import WeatherApp from './pages/page04/weather-app';
import Tutorial from './pages/page03/tutorial';
import Btn from './components/button/button'
import CustomNavbar from "./components/navbar/navbar";
import './App.css';

// can comment pages out as they are just there for testing purposes
function App() {
  return (
    <div className="App">
      <WeatherApp></WeatherApp>
    </div>
  );
}

export default App;
