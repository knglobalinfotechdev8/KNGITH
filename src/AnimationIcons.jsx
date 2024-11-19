// LottieAnimation.jsx
import React, { useEffect, useRef } from "react";
import lottie from "lottie-web"; // Import lottie-web

const LottieAnimation = ({ animationData,ClassStyle }) => {
  const animationContainer = useRef(null);

  useEffect(() => {
    // Initialize the animation
    const anim = lottie.loadAnimation({
      container: animationContainer.current, // the DOM element that will contain the animation
      renderer: "svg", // render as SVG
      loop: true, // loop the animation
      autoplay: true, // start playing automatically
      animationData: animationData, // your Lottie JSON data
    });

    return () => {
      anim.destroy(); // Cleanup on component unmount
    };
  }, [animationData]);

  return <div ref={animationContainer} className={`${ClassStyle}`} />;
};

export default LottieAnimation;
