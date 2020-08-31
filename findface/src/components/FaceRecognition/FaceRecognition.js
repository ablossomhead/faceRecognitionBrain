import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <img  
                    id='inputimage' 
                    alt='hi' 
                    src={imageUrl || 'https://news.ucdenver.edu/wp-content/uploads/2020/07/yoga-woman-final-1288x726.png'} 
                    width='500px' 
                    height='auto'
                />
                <div 
                    className='bounding-box' 
                    style={{
                        top: box.topRow, 
                        right: box.rightCol, 
                        bottom: box.bottomRow, 
                        left: box.leftCol
                    }} 
                ></div>
            </div>
        </div>
    )
}
 
export default FaceRecognition;