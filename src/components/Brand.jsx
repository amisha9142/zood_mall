import React, { useState } from 'react';

import pic1 from "../assets/pic1.webp";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.png";
import pic4 from "../assets/pic4.webp";
import pic5 from "../assets/pic5.webp";
import pic6 from "../assets/pic6.png";
import pic7 from "../assets/pic7.jpg";
import pic8 from "../assets/pic8.jpg";

const Brand = () => {
  const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8]; 
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const displayedImages = [
    images[(currentIndex - 2 + images.length) % images.length],
    images[(currentIndex - 1 + images.length) % images.length],
    images[currentIndex],
    images[(currentIndex + 1) % images.length],
    images[(currentIndex + 2) % images.length],
  ];

  return (
    <div className="carousel-container">
      <h1>Top Brands</h1>
      <div className="carousel">
        <div className="carousel-images">
          {displayedImages.map((image, index) => (
            <div key={index} className={`slide ${index === 2 ? 'active' : ''}`}>
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="carousel-image"
              />
            </div>
          ))}
        </div>
        <button className="next" onClick={nextSlide} >&#10095;</button>
      </div>
    </div>
  );
};

export default Brand;
