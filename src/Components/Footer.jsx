import React from 'react';
import { FooterVid, Logo } from '../../Assets/data';

const Footer = () => {
  const currentHour = new Date().getHours();
  const currentDay = new Date().getDay();

  // Business hours
  const openingHours = {
    0: `SUN   09:00 AM – 06:00 PM`, // Sunday
    1: 'MON   09:00 AM – 06:00 PM', // Monday
    2: 'TUE   09:00 AM – 06:00 PM', // Tuesday
    3: 'WED   09:00 AM – 06:00 PM', // Wednesday
    4: 'THU   09:00 AM – 06:00 PM', // Thursday
    5: 'FRI   09:00 AM – 06:00 PM', // Friday
    6: 'SAT   09:00 AM – 04:00 PM', // Saturday
  };

  const isOpen = currentDay !== 0 && (currentDay !== 6 || currentHour < 16); // Saturday open until 4 PM
  const openingStatus = isOpen ? 'Open Now' : 'Closed';

  return (
    <footer id="footer" className="relative bg-green-500">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={FooterVid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-20"></div>

      <div className="mx-auto relative flex flex-col   px-4 text-white z-10">
        <div className="flex flex-col lg:flex-row  w-full justify-between gap-[20px] sm:px-[20px] py-[20px]">
          {/* Logo and About Section */}
          <div className='basis-[20%]'>
            <a href="index.html">
              <img
                src={Logo}
                alt="Company Logo"
                className="img-fluid logo-footer max-w-20"
              />
            </a>
            <div className="footer-about mt-4">
              <p className="text-white text-sm lg:text-base">
              KN Global Infotech is a leading technology solutions provider specializing in innovative IT services and digital transformation.
              </p>
            </div>
          </div>

          {/* Business Hours Section */}
          <div className='basis-[20%]'>
            <h4 className="text-lg font-semibold">Business Hours</h4>
            <ul className="list-none text-white  mt-4">
              {Object.entries(openingHours).map(([day, hours]) => (
                <li key={day} className={day == currentDay ? "font-bold text-green-500" : ""}>
                  <span className='text-justify'>{hours}</span>
                </li>
              ))}
              <li className={`font-semibold ${openingStatus == 'Open Now' ? 'text-green-500':'text-red-600'}`}>{openingStatus}</li>
            </ul>
          </div>
         {/* Useful Links Section */}
         <div className='basis-[15%]'>
            <h2 className="text-lg font-semibold mb-4">Useful Links</h2>
            <div className="use-links">
              <ul className="list-none space-y-2">
                <li><a href="index.html" className="text-white hover:text-blue-400">Home</a></li>
                <li><a href="about.html" className="text-white hover:text-blue-400">About Us</a></li>
                <li><a href="gallery.html" className="text-white hover:text-blue-400">Gallery</a></li>
                <li><a href="contact.html" className="text-white hover:text-blue-400">Contact</a></li>
              </ul>
            </div>
          </div>

          {/* Social Links Section */}
          <div className='basis-[15%]'>
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <div className="social-icons">
              <ul className="list-none flex flex-col space-y-2">
                <li><a href="#" className="text-white hover:text-blue-400"><i className="fa-brands fa-facebook-f"></i> Facebook</a></li>
                <li><a href="#" className="text-white hover:text-blue-400"><i className="fa-brands fa-instagram"></i> Instagram</a></li>
                <li><a href="#" className="text-white hover:text-blue-400"><i className="fa-brands fa-linkedin-in"></i> LinkedIn</a></li>
              </ul>
            </div>
          </div>

          {/* Address Section */}
          <div className='basis-[20%]' >
            <h2 className="text-lg font-semibold mb-4">Address</h2>
            <div className="address-links">
              <ul className="list-none">
                <li className="address1 flex items-center text-white"><i className="fa-solid fa-location-dot mr-2"></i>49/1, Dr Subbarayan Rd, <br /> I Agraharam,
                Salem,<br /> Tamil Nadu - 636001, India.</li>
                <li className='mt-2'><a href="#" className="text-white hover:text-blue-400"><i className="fa-solid fa-phone mr-2"></i> +91 9500706954</a></li>
                <li className='mt-2'><a href="#" className="text-white hover:text-blue-400"><i className="fa-solid fa-envelope mr-2"></i> support@knglobalinfotech.com</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="copy-right-sectext-white text-center z-50 py-[10px] border-t border-white">
          <i className="fa-solid fa-copyright"></i>
          2024 KN GLOBAL INFOTECH. All rights reserved.
        </div>
        
      </div>


        
    </footer>
  );
};

export default Footer;
