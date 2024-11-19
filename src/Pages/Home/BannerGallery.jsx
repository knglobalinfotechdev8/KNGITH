import React, { useState } from 'react';
import { BannersImg } from "../../Constant"; // Adjust path based on your actual data source

const BannerGallery = () => {
  const [clickedImage, setClickedImage] = useState(null); // State for the clicked image

  const handleImageClick = (image) => {
    setClickedImage(image); // Set the clicked image to display in the popup
  };

  const closeModal = () => {
    setClickedImage(null); // Close the modal by clearing the clicked image
  };

  return (
    <div className="gallery-container">
      <h1 className="gallery-title text-white font-extrabold text-2xl">Banners</h1>
      <div className="gallery-grid">
        {BannersImg.map((image, i) => (
          <div className="gallery-item" key={i}>
            <img
              className="gallery-image"
              src={image.img}
              alt={image.title || `Gallery Item ${i + 1}`} // Alt text for the image
              onClick={() => handleImageClick(image)} // Open the image in popup on click
            />
            <div className="image-overlay">
              <h3 className="image-title">{image.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for the full-screen image */}
      {clickedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              className="popup-image"
              src={clickedImage.img}
              alt={clickedImage.title}
            />
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default BannerGallery;
