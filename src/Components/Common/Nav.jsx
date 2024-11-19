"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/Nav_menu";
import { cn } from "../lib/utils";
import { Gas, KNGIT,Store,Web_img,Trans, Logo } from "../../Assets/data";
import { Link } from 'react-router-dom';

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-between">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu open/close state
  };

  const handleMenuItemClick = () => {
    setIsOpen(false); // Close the menu when an item is clicked
  };

  return (
    <>
      <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
        <Menu setActive={setActive}>
          <div className="flex items-center sm:gap-[100px] gap-[120px]">
            <div className="flex items-center">
              <Link to="/">
                <img className="w-[90px] h-[50px] rounded-md" src={Logo} alt="logo" />
              </Link>
              <p className="text-white font-extrabold" style={{ fontFamily: 'Philosopher, sans-serif' }}>
                KN Global Infotech
              </p>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="sm:hidden flex items-center justify-between text-white w-fit p-2 border border-gray-300 rounded-md"
              onClick={toggleMenu}
            >
              <div className="relative w-6 h-6">
                {/* Top Line */}
                <span
                  className={`absolute top-0 left-0 w-full h-[2px] bg-white transition-transform duration-300 ease-in-out
                  ${isOpen ? 'rotate-45 translate-y-[10px]' : 'rotate-0'}`}
                ></span>
                {/* Middle Line */}
                <span
                  className={`absolute top-1/2 left-0 w-full h-[2px] bg-white transition-opacity duration-300 ease-in-out
                  ${isOpen ? 'opacity-0' : 'opacity-100'}`}
                ></span>
                {/* Bottom Line */}
                <span
                  className={`absolute bottom-0 left-0 w-full h-[2px] bg-white transition-transform duration-300 ease-in-out
                  ${isOpen ? '-rotate-45 -translate-y-[10px]' : 'rotate-0'}`}
                ></span>
              </div>
            </button>

            {/* Mobile Menu Items */}
            {isOpen && (
              <div
                className={`absolute right-[22%] gap-3 mt-[30%] w-fit p-4 flex flex-row items-center rounded-xl border bg-darkblue-default border-gray-300 sm:hidden 
                ${isOpen ? 'dropdown-enter-active' : 'dropdown-exit'}`}>
                <MenuItem setActive={setActive} active={active} item="Home">
                  <a href="/" className="flex flex-col space-y-4 text-sm" onClick={handleMenuItemClick}>
                    <HoveredLink>Who We Are</HoveredLink>
                    <HoveredLink>Our Products</HoveredLink>
                    <HoveredLink>Contact Us</HoveredLink>
                  </a>
                </MenuItem>

                <MenuItem setActive={setActive} active={active} item="Products">
                  <div className="text-sm flex flex-col space-y-4 p-4 bg-gray-800 w-[300px] h-[300px] overflow-scroll rounded-md">
                    <ProductItem
                      title="KN Gas Application"
                      href="/kngd"
                      src={Gas}
                      // src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                      description="KN Gas Distribution System streamlines gas supply chain management efficiently."
                      onClick={handleMenuItemClick} // Close menu on click
                    />
                    <ProductItem
                      title="KN Store Management System"
                      href="/knsms"
                      src={Store}
                      description="KN Store Management System streamlines retail operations, managing inventory and sales."
                      onClick={handleMenuItemClick} // Close menu on click
                    />
                    <ProductItem
                      title="KN Transport Management System"
                      href="/kntran"
                      src={Trans}
                      description="KN Transport Management System streamlines logistics for efficient vehicle operations."
                      onClick={handleMenuItemClick} // Close menu on click
                    />
                    <ProductItem
                      title="Custom Websites"
                      href="/knweb"
                      src={Web_img}
                      description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                      onClick={handleMenuItemClick} // Close menu on click
                    />
                  </div>
                </MenuItem>

                <MenuItem setActive={setActive} active={active} item="About Us">
                  <div className="flex flex-col space-y-4 text-sm">
                    <Link to="/about" onClick={handleMenuItemClick}>
                      <HoveredLink>Company Profile</HoveredLink>
                    </Link>
                    <Link to="/knteam" onClick={handleMenuItemClick}>
                      <HoveredLink>Our Team</HoveredLink>
                    </Link>
                    <Link to="/knterms" onClick={handleMenuItemClick}>
                      <HoveredLink>Terms & Conditions</HoveredLink>
                    </Link>
                    <Link to="/knpolicy" onClick={handleMenuItemClick}>
                      <HoveredLink>Privacy Policy</HoveredLink>
                    </Link>
                    <Link to="/knrefund" onClick={handleMenuItemClick}>
                      <HoveredLink>Refund Policy</HoveredLink>
                    </Link>
                  </div>
                </MenuItem>
              </div>
            )}

            {/* Desktop Menu Items */}
            <div className="hidden sm:flex sm:gap-4 gap-2">
              <a href="/" className="flex flex-col space-y-4 text-l" onClick={handleMenuItemClick}>
                Home
              </a>

              <MenuItem setActive={setActive} active={active} item="Products">
                <div className="text-sm grid grid-cols-2 gap-10 p-4">
                  <ProductItem
                    title="KN Gas Application"
                    href="/kngd"
                    src={Gas}
                    description="KN Gas Distribution System streamlines gas supply chain management efficiently."
                    onClick={handleMenuItemClick} // Close menu on click
                  />
                  <ProductItem
                    title="KN Store Management System"
                    href="/knsms"
                    src={Store}
                    description="KN Store Management System streamlines retail operations, managing inventory and sales."
                    onClick={handleMenuItemClick} // Close menu on click
                  />
                  <ProductItem
                    title="KN Transport Management System"
                    href="/kntran"
                    src={Trans}
                    description="KN Transport Management System streamlines logistics for efficient vehicle operations."
                    onClick={handleMenuItemClick} // Close menu on click
                  />
                  <ProductItem
                    title="Custom Websites"
                    href="/knweb"
                    src={Web_img}
                    description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                    onClick={handleMenuItemClick} // Close menu on click
                  />
                </div>
              </MenuItem>

              <MenuItem setActive={setActive} active={active} item="About Us">
                <div className="flex flex-col space-y-4 text-sm">
                  <Link to="/about" onClick={handleMenuItemClick}>
                    <HoveredLink>Company Profile</HoveredLink>
                  </Link>
                  <Link to="/knteam" onClick={handleMenuItemClick}>
                    <HoveredLink>Our Team</HoveredLink>
                  </Link>
                  <Link to="/knterms" onClick={handleMenuItemClick}>
                    <HoveredLink>Terms & Conditions</HoveredLink>
                  </Link>
                  <Link to="/knpolicy" onClick={handleMenuItemClick}>
                    <HoveredLink>Privacy Policy</HoveredLink>
                  </Link>
                  <Link to="/knrefund" onClick={handleMenuItemClick}>
                    <HoveredLink>Refund Policy</HoveredLink>
                  </Link>
                </div>
              </MenuItem>
            </div>
          </div>
        </Menu>
      </div>
    </>
  );
}
