"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Logo } from "../../Assets/data"; // Adjust your path accordingly
import { FaChevronDown } from "react-icons/fa"; // Icon for dropdown

export function Mobnav() {
  return (
    <div className="relative w-full flex items-center justify-between">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className={`fixed bg-gray-600 bg-opacity-80 top-[-0] w-full z-50 px-[6%] py-[20px] ${className}`}>
      <div className="flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link to="/" onClick={closeMobileMenu}>
            <img className="w-[70px] h-[40px] rounded-md" src={Logo} alt="logo" />
          </Link>
          <p className="text-white font-bold ml-2 text-2xl" style={{ fontFamily: "Philosopher, sans-serif" }}>
            KN Global Infotech
          </p>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden flex items-center justify-between text-white w-fit p-2 border border-gray-300 rounded-md"
          onClick={toggleMobileMenu}
        >
          <div className="relative w-6 h-4">
            <span
              className={`absolute top-0 left-0 w-full h-[1px] bg-white transition-transform duration-300 ease-in-out ${
                isMobileMenuOpen ? "rotate-45 translate-y-[10px]" : "rotate-0"
              }`}
            ></span>
            <span
              className={`absolute top-1/2 left-0 w-full h-[1px] bg-white transition-opacity duration-300 ease-in-out ${
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`absolute bottom-0 left-0 w-full h-[1px] bg-white transition-transform duration-300 ease-in-out ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-[10px]" : "rotate-0"
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Items */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="sm:hidden fixed top-20 right-0 w-[80%] bg-darkblue-default  h-screen px-[6%] py-6 z-40 flex flex-col items-start"
        >
          <div className="flex flex-col space-y-6 text-base font-medium">
            {/* Home Link */}
            <div className="space-y-2">
              <Link to="/" className="text-white hover:text-gray-400 transition-colors duration-200 flex text-lg" onClick={closeMobileMenu}>
                Home
              </Link>
            </div>

            {/* Dropdown Items */}
            {renderDropdown("Our Products", isProductsOpen, setIsProductsOpen, [
              { label: "KN Store Management", link: "/knsms" },
              { label: "KN Gas Application", link: "/kngd" },
              { label: "KN Transport Management", link: "/kntran" },
              { label: "Custom Websites", link: "/knweb" },
            ], closeMobileMenu)}

            {renderDropdown("Company", isCompanyOpen, setIsCompanyOpen, [
              { label: "Our Team", link: "/knteam" },
              { label: "Terms & Conditions", link: "/knterms" },
              { label: "Privacy Policy", link: "/knpolicy" },
              { label: "Refund Policy", link: "/knrefund" },
            ], closeMobileMenu)}
          </div>
        </motion.div>
      )}
    </div>
  );
}

// Dropdown Helper Function
function renderDropdown(title, isOpen, toggleOpen, links, closeMenu) {
  return (
    <div className="space-y-2">
      <div
        className="text-white font-semibold cursor-pointer flex items-center justify-between hover:text-gray-300 transition-colors duration-200"
        onClick={() => toggleOpen(!isOpen)}
      >
        <span className="text-lg">{title}</span>
        <FaChevronDown
          className={`text-white ml-2 transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        exit={{ height: 0, opacity: 0 }}
        className="overflow-hidden"
      >
        <div className="space-y-4 pl-6 text-lg">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.link}
              className="text-white hover:text-gray-400 transition-colors duration-200 flex"
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
