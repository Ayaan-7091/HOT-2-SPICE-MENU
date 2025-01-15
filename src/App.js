import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './App.css';
import image1 from '../src/assets/01.jpg'
import image2 from '../src/assets/02.jpg'
import image3 from '../src/assets/03.jpg'
import image4 from '../src/assets/04.jpg'
import image5 from '../src/assets/05.jpg'
import image6 from '../src/assets/06.jpg'
import image7 from '../src/assets/07.jpg'
import image8 from '../src/assets/08.jpg'
import image9 from '../src/assets/09.jpg'
import image10 from '../src/assets/10.jpg'
import image11 from '../src/assets/11.jpg'





const images = [
   image1,
   image2,
   image3,
   image4,
   image5,
   image6,
   image7,
   image8,
   image9,
   image10,
   image11]

const items = images.map((image, index) => (
    <img 
        key={index}
        src={image} 
        alt={`Menu ${index + 1}`} 
        className="carousel-image" 
    />
));

const App = () => {
    return (
        <div className="carousel-container">
            
            <h1>MENU</h1>

            {/* <img src={image1}></img> */}
            <AliceCarousel 
                items={items}
                autoPlay
                autoPlayInterval={3000}
                infinite
                disableDotsControls
                mouseTracking
                disableButtonsControls
                responsive={{
                    0: { items: 1 }, 
                    600: { items: 2 }, 
                    1024: { items: 3 }
                }}
            />
            <h1>HOT 2 SPICE</h1>
        </div>
    );
};

export default App;
