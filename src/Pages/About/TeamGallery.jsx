import React from 'react';
import { OurTeamImg } from "../../Constant"; // Adjust path based on your actual data source

const TeamGallery = () => {
  return (
    <div className="gallery-container">
      <h1 className="gallery-title text-white font-extrabold text-2xl">Banners</h1>
      <div className="gallery-grid">
        {OurTeamImg.map((image, i) => (
          <div className="gallery-item" key={i}>
            <img
              className="gallery-image"
              src={image.img} // Image source from the data
              alt={image.title || `Gallery Item ${i + 1}`} // Alt text for the image
            />
            <div className="image-overlay">
              <h3 className="image-title">{image.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamGallery;
