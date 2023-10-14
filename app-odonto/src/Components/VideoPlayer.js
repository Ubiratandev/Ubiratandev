import React from "react"
import ReactPlayer from 'react-player/lazy';

import videoDentista from'./Imagens/videoDentista.mp4';


import './Components.css';
const VideoPlayer=()=>{
  
    return(<div className="video">
         <h1 className="chamadaVideo">Doutor Rodrigo ensina</h1>
      <div className="playerWrapper">
          
          <ReactPlayer  controls controlsList="nodownload" url={videoDentista}
           config={{ file: { attributes: { controlsList: 'nodownload' } } }}width='100%' height='60%'/>
      </div>
    </div>)
}
export default VideoPlayer