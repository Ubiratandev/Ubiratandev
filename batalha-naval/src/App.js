//css
import './App.css';
//componentes
import Head from './components/Head';
import IndiceV from './components/IndiceV';
import IndiceH from './components/IndiceH';
import Campo from './components/Campo';
import ct1 from './imagens/ct1.png';
//hooks
import {useState} from 'react';

function App() {
  const [gameStage, setgameStage] = useState(0)
const[clicou, setclicou]=useState()
 const click =()=>{
  
   setclicou()
   console.log("clicou")
  }
  
  return (
    <div className="App">
     <div className='container'>
      <Head/>
      <IndiceV/>
      <IndiceH/>
      <Campo click = {click} clicou={clicou} ct1 ={ct1}/>
    
      </div>
    </div>
  );
}

export default App;
