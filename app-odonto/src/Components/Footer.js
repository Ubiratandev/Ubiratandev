import React from "react"
import RedesSociais from "./RedesSociais";
const Footer =()=>{
    return(
        <div className="foot">
            
                
                    <div className="textoFooter">
                        <h2 >Siga nas redes </h2>
                    </div>
                
         
                      <div className='listaRedes'>
                          <RedesSociais />
                      </div>
                     
                </div>

    )
}
export default Footer;