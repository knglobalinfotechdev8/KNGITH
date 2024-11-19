import { useRef } from "react";
import { OurTeamCelebrate } from "../../Constant";

const Celebration = () => {
  const galleryRef = useRef(null);

  const scrollSlider = (direction) => {
    if (galleryRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      galleryRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="py-12 bg-gray-800">
      <div className="container mx-auto px-6">
        <h1 className="text-center text-white font-bold text-3xl sm:text-4xl mb-8">
          Team Celebrations
        </h1>

        <div className="relative">
          {/* Left Scroll Button */}
          <button
            onClick={() => scrollSlider("left")}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-600 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Gallery Container */}
          <div
            ref={galleryRef}
            className="flex overflow-x-auto space-x-6 py-6 scroll-smooth"
          >
            {OurTeamCelebrate.map((image, i) => (
              <div
                className="gallery-item flex-none w-[300px] relative group"
                key={i}
              >
                <img
                  className="gallery-image w-full h-[200px] object-cover rounded-lg shadow-xl transition-transform duration-300 transform group-hover:scale-105"
                  src={image.img}
                  alt={image.alt || `Gallery Item ${i + 1}`}
                />
                {/* Image Overlay with Title and Description */}
                <div className="image-overlay absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-center">
                  <div className="text-white">
                    <h3 className="font-semibold text-xl">{image.title}</h3>
                    <p className="text-sm mt-2">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Scroll Button */}
          <button
            onClick={() => scrollSlider("right")}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-600 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};


export default Celebration