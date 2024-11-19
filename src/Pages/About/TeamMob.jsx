import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TeamMob = ({ OurTeamCelebrate }) => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true, // Enables infinite scroll
    speed: 500, // Animation speed
    slidesToShow: 1, // Only one image visible at a time
    slidesToScroll: 1, // Scroll one image at a time
    autoplay: true, // Auto-scroll the carousel
    autoplaySpeed: 2000, // Auto-scroll speed in milliseconds
    pauseOnHover: true, // Pause auto-scroll on hover
    arrows: false, // Disable default arrows
    centerMode: false, // No centering since only one image is visible
  };

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev(); // Scroll left (previous slide)
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext(); // Scroll right (next slide)
    }
  };

  // Add a condition to check for mobile screen size
  const isMobile = window.innerWidth <= 768;

  if (!isMobile) {
    return null; // Don't render the slider on non-mobile devices
  }

  return (
    <div className="relative "> {/* Ensure full-screen height for the container */}
      {/* Custom Left Scroll Button */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-3 rounded-full z-10"
      >
        &lt;
      </button>

      {/* Gallery Container */}
      <Slider {...settings} ref={sliderRef}>
        {OurTeamCelebrate.map((image, i) => (
          <div className="flex flex-col items-center h-full" key={i}> {/* Parent container uses full height */}
            <div className="w-full h-[400px] relative">
              <img
                className="gallery-image object-cover rounded-lg shadow-md w-full "
                src={image.img}
                alt={image.alt || `Gallery Item ${i + 1}`}
              />
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom Right Scroll Button */}
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-3 rounded-full z-10"
      >
        &gt;
      </button>
    </div>
  );
};

export default TeamMob;
