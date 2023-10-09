import './App.css';
import planoDeFundo from './Components/Imagens/planoDeFundo.png'
//componentes
import Header from './Components/Header';
import Section from './Components/Section';
import DentistaImagem from './Components/DentistaImagen';
import FaleConosco from './Components/FaleConosco';
import Carrossel from './Components/Carrossel';
import FaixaInform from'./Components/FaixaInform';
import Footer from './Components/Footer';
import TagContato from './Components/TagContato';
import Sobre from './Components/Sobre';
function App() {
  return (
    <div className="App" >
     <div className='wrapper'>
       <div className='headerApp'><Header/></div>
       <div className='tagApp'><TagContato/></div>
       <div className='fotoApp'><DentistaImagem/></div>
       <div className='textoApp'><Section/></div>
       <div className='sobApp'><Sobre/></div>
       <div className='FaixaApp'><FaixaInform/></div>
       <div className='carrosselApp'><Carrossel/></div>
       <div className='contatoApp'><FaleConosco/></div>
       <div className='footerApp'><Footer/></div>
       </div>
    </div>
  );
}

export default App;
