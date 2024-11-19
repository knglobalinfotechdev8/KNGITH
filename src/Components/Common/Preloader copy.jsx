import React, { useState, useEffect, useRef } from 'react';
import { logovedio, logovediomob } from '../../Assets/data';

const Preloader = ({ onVideoEnd }) => {
  const [isVideoReady, setIsVideoReady] = useState(false); // Track if video is ready to play
  const videoRef = useRef(null);  // Reference to video element
  const [playTriggered, setPlayTriggered] = useState(false); // Track if play has been triggered

  // Handle video end event
  const handleVideoEnd = () => {
    onVideoEnd();  // Trigger the end of the preloader
  };

  // Handle the 'can play' event to ensure the video is ready to play
  const handleCanPlay = () => {
    setIsVideoReady(true);  // Video is ready to play
    try {
      // Attempt to play the video if possible
      videoRef.current.play();
    } catch (err) {
      console.log("Autoplay failed, waiting for user interaction.");
    }
  };

  // Function to handle manual play (iOS workaround)
  const handlePlay = () => {
    if (videoRef.current && !playTriggered) {
      videoRef.current.play(); // Trigger play manually
      setPlayTriggered(true); // Mark that the video play was triggered
    }
  };

  // Detect iOS devices and force interaction-based play
  const isIOS = /iPhone|iPad|iPod/.test(navigator.userAgent);

  // Ensure video plays after page refresh on iOS (Autoplay restriction)
  useEffect(() => {
    if (isIOS && !playTriggered && videoRef.current) {
      videoRef.current.play().catch(err => {
        console.log("Autoplay blocked. Waiting for user interaction.");
      });
    }
  }, [isIOS, playTriggered]);

  // Ensure that video is ready to play after refresh
  useEffect(() => {
    if (videoRef.current && !playTriggered) {
      videoRef.current.play().catch(err => {
        console.log("Autoplay blocked, will wait for user interaction.");
      });
    }
  }, [playTriggered]);

  // Add event listener to trigger video play manually on user interaction (e.g., touch/click)
  useEffect(() => {
    const handleInteraction = () => {
      handlePlay(); // Trigger play if user interacts with the page
    };

    if (isIOS) {
      window.addEventListener('click', handleInteraction); // Touch and click
      window.addEventListener('touchstart', handleInteraction); // Touch devices
    }

    return () => {
      if (isIOS) {
        window.removeEventListener('click', handleInteraction);
        window.removeEventListener('touchstart', handleInteraction);
      }
    };
  }, [isIOS]);

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      {/* Video element with conditional sources for mobile and desktop */}
      <video
        ref={videoRef} // Attach the reference to the video element
        autoPlay
        muted
        onEnded={handleVideoEnd}
        preload="auto" // Preload video for better performance
        playsInline // Important for mobile devices, especially iPhones
        loop={false} // Do not loop the video
        className="w-full h-full object-cover"
        aria-label="Loading animation" // Accessibility improvement
        onCanPlay={handleCanPlay}  // Ensure video is ready to play
        onClick={handlePlay}  // Allow video to start on click
      >
        {/* Video sources for desktop and mobile */}
        <source src={logovedio} type="video/mp4" media="(min-width: 640px)" />
        <source src={logovediomob} type="video/mp4" media="(max-width: 639px)" />

        {/* Additional formats for better compatibility */}
        <source src={logovedio} type="video/webm" media="(min-width: 640px)" />
        <source src={logovediomob} type="video/webm" media="(max-width: 639px)" />
        
        {/* Fallback message for unsupported browsers */}
        <p>Your browser does not support the video tag. Please update your browser or try a different one.</p>
      </video>
    </div>
  );
};

export default Preloader;