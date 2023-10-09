import React from 'react';
import {motion} from'framer-motion';
import avaliacao from './Imagens/avaliacao.jpg';
import cliente from './Imagens/cliente.jpg';
import doutor from'./Imagens/doutor.jpg';
import protese from'./Imagens/protese.jpg';
import protese2 from './Imagens/protese2.jpg';
import raioX from './Imagens/raioX.jpg';
//hooks
import{ useState,useEffect,useRef } from 'react';
const images=[avaliacao, cliente,doutor, protese, protese2,raioX]

const Carrossel=()=>{
const [width,setWidth]= useState(0)
const caroussel = useRef();
useEffect(()=> {console.log(caroussel.current?.scrollWidth,caroussel.current?.offsetWidth) 
    setWidth(caroussel.current?.scrollWidth, caroussel.current?.offsetWidth)},[])
    return(
        <div>

       <div className='carrossel'>
           <motion.div ref={caroussel} className='carrossel2' whileTap={{cursor:"grabbing"}}>
            <motion.div className='inner' drag='x' dragConstraints={{right:0 ,left: (-width/2)-150}}
            initial={{x:100}}
            animate={{x:0}}
            transition={{duration:0.8}}>
                {images.map(images =>(<motion.div key={images} className='item'><img src={images} ></img></motion.div>))}
            </motion.div>
           </motion.div>
       </div>
        </div>
    )
}
export default Carrossel;