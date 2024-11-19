import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Team = ({ OurTeamCelebrate }) => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true, // Enables infinite scroll
    speed: 500, // Animation speed
    slidesToShow: 5, // Number of slides to show
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Auto-scroll the carousel
    autoplaySpeed: 2000, // Auto-scroll speed in milliseconds
    pauseOnHover: true, // Pause auto-scroll on hover
    arrows: false, // Disable default arrows
    centerMode: true, // Center the active slide
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
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

  return (
    <div className="team-slider relative sm:block hidden">
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
          <div className="flex flex-col items-center p-4" key={i}>
            <div className="w-48 h-64 relative">
              <img
                className="gallery-image object-cover rounded-lg shadow-md w-full h-full"
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

export default Team;
