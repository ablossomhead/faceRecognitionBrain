import React from 'react';
import Tilt from 'react-tilt';
import './logo.css';
import brainiac from './brainiac.png';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt 
            className="Tilt br3 shadow-2" 
            options={{ max : 75 }} 
            style={{ height: 150, width: 150 }} 
            >
                <div className="Tilt-inner pa3"><img alt='logo' src={brainiac}/></div>
            </Tilt>
        </div>
    )
}
 
export default Logo;