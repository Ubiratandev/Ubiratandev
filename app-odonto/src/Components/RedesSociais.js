import './Components.css'
import logoInstagram from'./Imagens/logoInstagram.png'
import logoFacebook from './Imagens/logoFacebook.png'
import logoLinkedin from './Imagens/logoLinkedin.png'
import logoYouTube from './Imagens/logoYouTube.png'
const RedesSociais =()=>{
    return (
        <div>

<div className='RedesSociais'>
                        <a href="https://www.youtube.com/watch?v=F74GKCLXUWM&list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n&index=6&ab_channel=CursoemV%C3%ADdeo" target='blank'><img src={logoInstagram} className="instaRedes"></img></a>
                        <a href=""><img src={logoFacebook} className="faceRedes"></img></a>
                        <a href=""><img src={logoLinkedin} className="linkedinRedes"></img></a>
                        <a href=""><img src={logoYouTube} className="youtubeRedes"></img></a>
                        
                    </div>
        </div>
    )
}
export default RedesSociais;