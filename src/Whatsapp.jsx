import React from 'react';
import { motion } from 'framer-motion';
import Whastappicon from '../src/Assets/Lottifile/Whatsapp-Ani.json'
import LottieAnimation from './AnimationIcons';


const WhatsAppButton = () => {
  return (
    <motion.div
      initial={{ y: 0 }} // Initial vertical position
      animate={{ y: [0, -20, 1] }} // Bounce effect
      transition={{
        duration: 1.5,
        repeat: Infinity, // Repeat infinitely
        repeatType: 'loop', // Loop the animation
        ease: 'easeInOut' // Easing function
      }}
      className="fixed right-3 bottom-[10px] whatsapp z-10"
    >
      <a href="https://wa.me/919500706954" target="_blank" rel="noopener noreferrer">
      <LottieAnimation animationData={Whastappicon} ClassStyle={'w-[70px]'}/>
      </a>
    </motion.div>
  );
};

export default WhatsAppButton;
