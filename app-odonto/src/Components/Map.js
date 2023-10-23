import React from 'react';
import { GoogleMap, useJsApiLoader,Marker } from '@react-google-maps/api';
import './Components.css';
const Map =()=>{
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyB2cUEqCgQNfrr3gZNKwMfByks7AcElo8Y"
      })
    const position={lat: -22.47013158399125, 
        lng:-43.825662621223195,}
    const chegar="https://maps.google.com/maps?ll=-22.469259,-43.82661&z=15&t=m&hl=en&gl=US&mapclient=apiv3&cid=319760856793617744"
   
   
   return(<div className='map'>
    
        <div className='mapaComponente'>
            {isLoaded ? (
            <GoogleMap
              mapContainerStyle={{width:"100%",height:"90%"}}
              center={position}
              zoom={15}
            
            >
              <Marker  position={position} options={{label:{text:"Dr Rodrigo Damasceno",className:"marker"}}}/>
            </GoogleMap>
                ) : <></>}
                
             
                </div>
         
             
    </div>)
}
export default Map