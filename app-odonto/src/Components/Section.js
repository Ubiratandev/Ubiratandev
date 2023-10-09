import './Components.css'
import DentistaImagem from './DentistaImagen'
const Section=()=>{
    return(
        <div className="section">
            
            <div className="textSection">
             <h1 className="head"> Nossos tratamentos </h1>
             <h2 className="serv1">Limpeza</h2>
             <h2 className="serv2">Clareamento</h2>
             <h2 className="serv3">Tratamento de canal</h2>
             <h2 className="serv4">Obturações</h2>
             <h2 className="serv5">Implantes</h2>
             <h2 className="serv6">Facetas</h2>
             <h2 className="serv7">Extrações</h2>
             
            </div>
             <div className="agende"><p>AGENDE A SUA CONSULTA</p></div>
        </div>
    )
}
export default Section;