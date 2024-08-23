import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { Logo } from "../assets";

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

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`left-0 poppins-regular w-full text-white z-50 ease-in-out duration-500 transform ${
        isScrolled
          ? "fixed bg-[#000000CC] text-white shadow-md"
          : "text-[#230d0d] absolute translate-y"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-4">
          <div id="logo" className="md:ml-60">
            <Link to="/">
              <img src={Logo} alt="Logo" title="Home" className="w-auto" />
            </Link>
          </div>
          <nav id="nav-menu-container" className="hidden md:block">
            <ul className="flex space-x-6">
              <li className="text-inherit font-semibold">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link
                  to="/aboutus"
                  className="hover:text-purple-500 text-inherit"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/category"
                  className="hover:text-purple-500 text-inherit"
                >
                  Category
                </Link>
              </li>
              <li>
                <Link
                  to="/price"
                  className="hover:text-purple-500 text-inherit"
                >
                  Price
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-purple-500 text-inherit"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-purple-500 text-inherit"
                >
                  Contact
                </Link>
              </li>
              <li className="relative group">
                <Link to="#" className="hover:text-purple-500 text-inherit">
                  Pages
                </Link>
                <ul className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden group-hover:block">
                  <li>
                    <Link
                      to="/elements"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Elements
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/search"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Search
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/single"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Single
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="bg-[#49e4fa] text-white px-4 py-2 hover:bg-[#49e5fa6e] transition duration-300"
                >
                  Signup
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="bg-[#49e4fa] text-white px-4 py-2 mr-3 hover:bg-[#49e5fa6e] transition duration-300"
                >
                  Login
                </Link>
              </li>
            </ul>
          </nav>
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-gray-700">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <nav
          id="mobile-menu"
          className="md:hidden bg-white border-t border-gray-200"
        >
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <Link to="/" className="hover:text-purple-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/aboutus" className="hover:text-purple-500">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/category" className="hover:text-purple-500">
                Category
              </Link>
            </li>
            <li>
              <Link to="/price" className="hover:text-purple-500">
                Price
              </Link>
            </li>
            <li>
              <Link to="/blog-home" className="hover:text-purple-500">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-purple-500">
                Contact
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-purple-500">
                Pages
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="bg-purple-500 text-inherit px-4 py-2 rounded hover:bg-purple-600"
              >
                Signup
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="bg-purple-500 text-inherit px-4 py-2 rounded hover:bg-purple-600"
              >
                Login
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;