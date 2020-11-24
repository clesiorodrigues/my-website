import About from './components/About';
import './App.css';
import Home from './components/Home';
import TopBar from './components/TopBar';
import Footer from './components/Footer';
import Repos from './components/Repos';
import Portfolio from './components/Portfolio';
import Ideia from './components/Ideia';
import Form from './components/Form';
import {rolar} from './functions';

function App() {
  return (
    <div className="App" onWheel={(e)=>{rolar(e)}}>
      <TopBar/>
      <Home/>
      <About/>
      <Ideia/>
      <Portfolio/>
      <Repos/>
      <Footer/>
      <Form/>
    </div>
  );
}



export default App;
