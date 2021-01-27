import About from './components/About';
import './App.css';
import Home from './components/Home';
import TopBar from './components/TopBar';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Ideia from './components/Ideia';
import Form from './components/Form';
import {rolar} from './functions';

function App() {

  var timeout = true;

  return (
    <div className="App" 
      onWheel={
        function(e){
          if(timeout){
            rolar(e)
            timeout = false;
            setTimeout(() => { timeout = true }, 280);
          }
        }
      }
    >
      <TopBar/>
      <Home/>
      <Ideia/>
      <Portfolio/>
      <About/>
      <Footer/>
        <Form/>
    </div>
  );
}



export default App;
