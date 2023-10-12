import React from "react"
import ReactPlayer from 'react-player/lazy';
import kaduGay from './Imagens/kaduGay.mp4' ;
import sandroCurio from './Imagens/sandroCurio.mp4';
import './Components.css';
const VideoPlayer=()=>{
    return(<div className="video">
       
      <div className="playerWrapper">
          
          <ReactPlayer  controls controlsList="nodownload" url={sandroCurio}
           config={{ file: { attributes: { controlsList: 'nodownload' } } }}width='100%' height='60%'/>
      </div>
    </div>)
}
export default VideoPlayer