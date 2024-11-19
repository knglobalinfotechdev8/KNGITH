"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/Nav_menu";
import { cn } from "../lib/utils";
import { Gas, KNGIT, Store, Web_img, Trans, Logo } from "../../Assets/data";
import { Link } from 'react-router-dom';

export function NavbarDemo() {
  return (
    <div className="relative w-full  flex items-center justify-between">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);

  return (
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

          {/* Desktop Menu Items */}
          <div className="hidden sm:flex sm:gap-4 gap-2">
            <a href="/" className="flex flex-col space-y-4 text-l">
              Home
            </a>

            <MenuItem setActive={setActive} active={active} item="Products">
              <div className="text-sm grid grid-cols-2 gap-10 p-4">
                <ProductItem
                  title="KN Gas Application"
                  href="/kngd"
                  src={Gas}
                  description="KN Gas Distribution System streamlines gas supply chain management efficiently."
                />
                <ProductItem
                  title="KN Store Management System"
                  href="/knsms"
                  src={Store}
                  description="KN Store Management System streamlines retail operations, managing inventory and sales."
                />
                <ProductItem
                  title="KN Transport Management System"
                  href="/kntran"
                  src={Trans}
                  description="KN Transport Management System streamlines logistics for efficient vehicle operations."
                />
                <ProductItem
                  title="Custom Websites"
                  href="/knweb"
                  src={Web_img}
                  description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                />
              </div>
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="About Us">
              <div className="flex flex-col space-y-4 text-sm">
                <Link to="/about">
                  <HoveredLink>Company Profile</HoveredLink>
                </Link>
                <Link to="/knteam">
                  <HoveredLink>Our Team</HoveredLink>
                </Link>
                <Link to="/knterms">
                  <HoveredLink>Terms & Conditions</HoveredLink>
                </Link>
                <Link to="/knpolicy">
                  <HoveredLink>Privacy Policy</HoveredLink>
                </Link>
                <Link to="/knrefund">
                  <HoveredLink>Refund Policy</HoveredLink>
                </Link>
              </div>
            </MenuItem>
          </div>
        </div>
      </Menu>
    </div>
  );
}
