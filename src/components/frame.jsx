import React, { useEffect, useRef, useState } from 'react';
import image9 from '../assets/image9.jpg';
import image10 from '../assets/image10.jpg';
import image11 from '../assets/image11.png';
import image12 from '../assets/image12.jpg';

const Frame = () => {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [image9, image10, image11, image12];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const container = containerRef.current;
    const translateX = -currentIndex * 100;
    container.style.transform = `translateX(${translateX}%)`;
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="outer-container">
      <button className="nav-button left" onClick={handlePrev}>&#10094;</button>
      <div className="image-container" ref={containerRef}>
        {images.map((src, index) => (
          <img src={src} alt={`Image ${index + 1}`} key={index} />
        ))}
      </div>
      <button className="nav-button right" onClick={handleNext}>&#10095;</button>
    </div>
  );
};

export default Frame;
