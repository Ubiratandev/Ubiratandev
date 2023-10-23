import './Components.css'
import logoInstagram from'./Imagens/logoInstagram.png'
import logoFacebook from './Imagens/logoFacebook.png'
import logoLinkedin from './Imagens/logoLinkedin.png'
import logoYouTube from './Imagens/logoYouTube.png'
const RedesSociais =()=>{
    return (
        <div>

<div className='RedesSociais'>
                        <a href="" target='blank'><img src={logoInstagram} className="instaRedes"></img></a>
                        <a href=""><img src={logoFacebook} className="faceRedes"></img></a>
                        <a href=""><img src={logoLinkedin} className="linkedinRedes"></img></a>
                        <a href=""><img src={logoYouTube} className="youtubeRedes"></img></a>
                        
                    </div>
        </div>
    )
}
export default RedesSociais;