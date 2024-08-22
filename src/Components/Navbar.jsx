import React from "react";

const Navbar = () => {
  return (
    <header className="bg-white shadow" id="header">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div id="logo">
            <a href="index.html">
              <img src="img/logo.png" alt="Logo" title="Logo" />
            </a>
          </div>
          <nav className="hidden md:flex space-x-6" id="nav-menu-container">
            <ul className="flex items-center space-x-4">
              <li className="text-blue-500">
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="about-us.html" className="hover:text-blue-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="category.html" className="hover:text-blue-500">
                  Category
                </a>
              </li>
              <li>
                <a href="price.html" className="hover:text-blue-500">
                  Price
                </a>
              </li>
              <li>
                <a href="blog-home.html" className="hover:text-blue-500">
                  Blog
                </a>
              </li>
              <li>
                <a href="contact.html" className="hover:text-blue-500">
                  Contact
                </a>
              </li>
              <li className="relative group">
                <a href="#" className="hover:text-blue-500">
                  Pages
                </a>
                <ul className="absolute hidden group-hover:block bg-white shadow-lg p-2 rounded">
                  <li>
                    <a
                      href="elements.html"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Elements
                    </a>
                  </li>
                  <li>
                    <a
                      href="search.html"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Search
                    </a>
                  </li>
                  <li>
                    <a
                      href="single.html"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Single
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="#"
                  className="ticker-btn bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Signup
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="ticker-btn bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Login
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
