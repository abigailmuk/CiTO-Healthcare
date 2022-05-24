/* import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

const Map = ({ location, zoomLevel }) => (
  <div className="map">
    <h2 className="maph2">Come Visit Us At Our Campus</h2>

    <div className="googlemap">
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
)

const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pinicon" />
    <p className="pintext">{text}</p>
  </div>
)

export default Map 










import { styled } from "@material-ui/core"

export const maph2 = styled.div`
    text-transform: uppercase;
    font-size: 1rem;
    padding: 20px;
    padding-left: 10px;
    text-align: center;
    
    
    @media screen and (min-width: 799px) {
        font-size: 1.3rem;
        font-weight: 400;
        
        
    }
 ` 
  
export const googlemap = styled.div`
    width: 100%;
    height: 60vh;

    @media screen and (min-width: 799px) {
        height: 80px;
    }
`
  
export const pin = styled.div`
    display: flex;
    align-items: center;
    width: 180px;
    color: var(--main-blue);

    @media screen and (min-width: 799px) {
        width: 15vw;
    }
` 
  
export const pinicon = styled.div`
    font-size: 4rem;
    
    @media screen and (min-width: 799px) {
        font-size: 10vw;
    }
`
  
export const pintext = styled.div`
    font-size: 1.3em;
`
*/