import React from "react"
import dentista from './Imagens/dentistaDef.jpg'
import './Components.css'
const DentistaImagem=()=>{
    return(
        <div className='foto'>
            <img src={dentista} alt="Dentista trabalhando" ></img>
           
        </div>
    )

}
export default DentistaImagem;