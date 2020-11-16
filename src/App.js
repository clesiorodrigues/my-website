import About from './About';
import './App.css';
import Home from './Home';
import TopBar from './TopBar';

function App() {
  return (
    <div className="App">
      <TopBar/>
      <Home/>
      <About/>
    </div>
  );
}

export default App;
