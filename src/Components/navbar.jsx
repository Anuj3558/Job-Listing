import React, { useState, useEffect } from 'react';
import { Logo } from '../assets';
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`left-0 poppins-regular  w-full text-white z-50 ease-in-out duration-500 transform ${
        isScrolled ? 'fixed bg-[#000000CC] text-white shadow-md' : 'text-black absolute translate-y'
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-4">
          <div id="logo" className='md:ml-60'>
            <a href="/">
              <img src={Logo} alt="Logo" title="Home" className=" w-auto" />
            </a>
          </div>
          <nav id="nav-menu-container" className="hidden md:block">
            <ul className="flex space-x-6">
              <li className="text-inherit font-semibold">
                <a href="/">Home</a>
              </li>
              <li>
                <a href="aboutus" className="hover:text-purple-500 text-inherit">About Us</a>
              </li>
              <li>
                <a href="category.html" className="hover:text-purple-500 text-inherit">Category</a>
              </li>
              <li>
                <a href="price.html" className="hover:text-purple-500 text-inherit">Price</a>
              </li>
              <li>
                <a href="blog-home.html" className="hover:text-purple-500 text-inherit">Blog</a>
              </li>
              <li>
                <a href="contact.html" className="hover:text-purple-500 text-inherit">Contact</a>
              </li>
              <li className="relative group">
                <a href="#" className="hover:text-purple-500 text-inherit">Pages</a>
                <ul className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden group-hover:block">
                  <li>
                    <a href="elements.html" className="block px-4 py-2 hover:bg-gray-100">Elements</a>
                  </li>
                  <li>
                    <a href="search.html" className="block px-4 py-2 hover:bg-gray-100">Search</a>
                  </li>
                  <li>
                    <a href="single.html" className="block px-4 py-2 hover:bg-gray-100">Single</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="signup" className="bg-[#49e4fa] text-white px-4 py-2 hover:bg-[#49e5fa6e] transition duration-300">Signup</a>
              </li>
              <li>
                <a href="login" className="bg-[#49e4fa] text-white px-4 py-2 mr-3 hover:bg-[#49e5fa6e] transition duration-300">Login</a>
              </li>
            </ul>
          </nav>
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <nav id="mobile-menu" className="md:hidden bg-inherit border-t border-gray-200">
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <a href="/" className="hover:text-purple-500">Home</a>
            </li>
            <li>
              <a href="aboutus" className="hover:text-purple-500">About Us</a>
            </li>
            <li>
              <a href="category.html" className="hover:text-purple-500">Category</a>
            </li>
            <li>
              <a href="price.html" className="hover:text-purple-500">Price</a>
            </li>
            <li>
              <a href="blog-home.html" className="hover:text-purple-500">Blog</a>
            </li>
            <li>
              <a href="contact.html" className="hover:text-purple-500">Contact</a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-500">Pages</a>
            </li>
            <li className='py-5'>
              <a href="signup" className="bg-[#49e4fa] text-inherit px-4 py-2   hover:bg-[#36a1af]">Signup</a>
            </li>
            <li>
              <a href="login" className="bg-[#49e4fa] text-inherit px-4 py-2   hover:bg-[#49e4fa]">Login</a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
