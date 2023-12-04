import React, { useState } from "react";
import "./codehighlights.css";

import Image from "/images/graohql.jpg";
import Image2 from "/images/sql.jpg";

const CodeHighlights = () => {
  const images = [Image, Image2];
  const [currentImage, setCurrentImage] = useState(0);
  const [isFullSize, setIsFullSize] = useState(false);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    setIsFullSize(false); // Reset full-size mode when changing images
  };

  const prevImage = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length
    );
    setIsFullSize(false); // Reset full-size mode when changing images
  };

  const toggleFullSize = () => {
    setIsFullSize((prevIsFullSize) => !prevIsFullSize);
  };

  return (
    <>
      <div className="code-highlights-box">
        <div className={`image-slider ${isFullSize ? "full-size" : ""}`}>
          <button className="slider-button" onClick={prevImage}></button>
          <img
            src={images[currentImage]}
            alt={`Slide ${currentImage + 1}`}
            className={isFullSize ? "full-size-image" : ""}
            onClick={toggleFullSize}
          />
          <button className="slider-button" onClick={nextImage}></button>
        </div>
        <div className="text-box">
          <h1 className="title-text">Coding Highlights</h1>
          <p className="small-text">
            Click on either side of the image to scroll through some of my
            coding highlights from projects and assignments I've worked on. More
            details can be found on my GitHub.
          </p>
        </div>
      </div>
    </>
  );
};

export default CodeHighlights;
