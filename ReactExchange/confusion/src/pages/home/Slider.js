import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '500px'
}
const slideImages = [
    {
        src: "assets/img/promo/promo1.png" 
    },
    {
        src: "assets/img/promo/promo2.png"
    },
    {
        src: "assets/img/promo/promo3.png"       
    },
];

function Slider(){
    return (
        <div className="slide-container">
            <Slide>
                {slideImages.map((slideImage, index) => (
                    <div key={index}>
                        <div style={{ ...divStyle, backgroundImage: `url(${slideImage.src})` }}>
                           
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    )
}

export default Slider