import About from './components/About';
import './App.css';
import Home from './components/Home';
import TopBar from './components/TopBar';
import Footer from './components/Footer';
import Repos from './components/Repos';
import Portfolio from './Portfolio';

function App() {
  return (
    <div className="App">
      <TopBar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Repos/>
      <Footer/>
    </div>
  );
}

export default App;
