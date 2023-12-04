import React, { useState } from "react";
import "./codehighlights.css";

const CodeHighlights = () => {
  const images = ["/images/sql.jpg", "/images/graphql.jpg"];
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length
    );
  };
  console.log("Current Image Path:", images[currentImage]);

  return (
    <div className="image-slider">
      <button onClick={prevImage}>&lt;</button>
      <img
        src={images[currentImage]}
        alt={`Slide ${currentImage + 1}`}
        onError={(e) => console.error("Image Error:", e)}
      />
      <button onClick={nextImage}>&gt;</button>
    </div>
  );
};

export default CodeHighlights;
