import React, { useEffect, useRef, useState } from 'react';
import trend from '../assets/trend.png';
import trend1 from '../assets/trend1.png';
import image3 from '../assets/image3.png';
import Best from '../components/Best';

const Trend = () => {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    trend,
    trend1,
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
      <div className="image-container" ref={containerRef}>
        {images.map((src, index) => (
          <img src={src} alt={`Image ${index + 1}`} key={index} />
        ))}
      </div>
      <Best/>
    </div>
  );
};

export default Trend;
