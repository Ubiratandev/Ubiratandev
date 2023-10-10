import React,{useState,useRef, useEffect} from 'react'
import gatinhos from './Imagens/gatinhos.jpg'
import pauDeMacarrao from'./Imagens/pauDeMacarrao.mp4'
const videoUrl='https://youtu.be/LMD6MqwErzc?si=QAb9VHYnPDFBfljn'


const usePlayerState=($videoPlayer)=>{
    const [playerState,setplayerState]= useState({playing:false,percentage:0,});
    useEffect(()=>
    {playerState.playing?$videoPlayer.current.play()
        :$videoPlayer.current.pause()},[$videoPlayer, playerState.playing])

    
    const toggleVideoPlay=()=>{
        
     setplayerState({...playerState,playing:!playerState.playing})
     console.log($videoPlayer)
    }
    const handleTimeUpdate=()=>{

        const currentPercentage=($videoPlayer.current.currentTime/
        $videoPlayer.current.duration)*100
        
        setplayerState({...playerState,percentage:currentPercentage,})
        console.log($videoPlayer)
    }
return {playerState,toggleVideoPlay,handleTimeUpdate}
}
const VideoP =()=>{
    const $videoPlayer=useRef(null);
    const {playerState,toggleVideoPlay,handleTimeUpdate}= usePlayerState($videoPlayer);
   
   
    return(
        <div className="Video">
        <video ref={$videoPlayer} src={pauDeMacarrao} poster={gatinhos} onTimeUpdate={handleTimeUpdate}></video>
        <div className='controlesV'>
            <button className='play' onClick={toggleVideoPlay}>{playerState.playing ?"pause":"play"}</button>
            <input type='range' min='0'max='100' onChange={()=>{console.log('MUDANCA MANUAL')}} value={playerState.percentage}></input>
        </div>
        </div>
    )
}
export default VideoP