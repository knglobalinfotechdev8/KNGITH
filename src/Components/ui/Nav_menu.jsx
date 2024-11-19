"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Transition configuration for animations
const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

// MenuItem Component
export const MenuItem = ({ setActive, active, item, children }) => {
  const handleClick = () => {
    // Toggle active state on click for mobile
    if (window.innerWidth <= 768) { // Mobile view breakpoint
      if (active === item) {
        setActive(null); // Deselect if already active
      } else {
        setActive(item); // Set to active item
      }
    } else {
      // Desktop view behavior
      setActive(item); // Just set it to active
    }
  };

  return (
    <div onClick={handleClick} className="relative cursor-pointer">
      <motion.p
        transition={{ duration: 0.3 }}
        className="sm:text-black text-white hover:opacity-[0.9]"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-darkblue-default backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] shadow-xl"
              >
                <motion.div layout className="w-max h-full p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

// Menu Component
export const Menu = ({ setActive, children }) => {
  const handleMouseLeave = () => {
    setActive(null); // resets the state
  };

  return (
    <nav
      onMouseLeave={handleMouseLeave} // resets the state
      className="relative rounded-full antialiased md:w-full md:px-10 bg-white/[0.5] backdrop-blur-xl border sm:text-[17px] text-[11px] shadow-input flex items-center h-[60px]"
    >
      {children}
    </nav>
  );
};

// ProductItem Component
export const ProductItem = ({ title, description, href, src }) => {
  return (
    <Link to={href} className="flex space-x-2">
      <img
        src={src}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
        width={140} // Add width directly for the image
        height={70} // Add height directly for the image
      />
      <div>
        <h4 className="sm:text-xl text-[12px] font-bold mb-1 text-white">
          {title}
        </h4>
        <p className="text-gray-300 sm:text-sm text-[8px] max-w-[10rem]">
          {description}
        </p>
      </div>
    </Link>
  );
};

// HoveredLink Component
export const HoveredLink = ({ children, ...rest }) => {
  return (
    <a
      {...rest}
      className="text-gray-400 hover:text-white"
    >
      {children}
    </a>
  );
};

// Example of using the components
const ExampleComponent = () => {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <Menu setActive={setActiveItem}>
      <MenuItem setActive={setActiveItem} active={activeItem} item="Item 1">
        <div>Details about Item 1</div>
      </MenuItem>
      <MenuItem setActive={setActiveItem} active={activeItem} item="Item 2">
        <div>Details about Item 2</div>
      </MenuItem>
      <MenuItem setActive={setActiveItem} active={activeItem} item="Item 3">
        <div>Details about Item 3</div>
      </MenuItem>
    </Menu>
  );
};

// Export your ExampleComponent to use in your app
export default ExampleComponent;
