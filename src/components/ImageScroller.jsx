import React, { useEffect, useRef, useState } from 'react';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';

const ImageScroller = () => {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    image1,
    image2,
    image3,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const container = containerRef.current;
    const translateX = -currentIndex * container.clientWidth;
    container.style.transform = `translateX(${translateX}px)`;
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

export default ImageScroller;
