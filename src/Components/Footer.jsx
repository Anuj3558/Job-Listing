import React from "react";
// import "../main.css";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/4 px-4 mb-6 md:mb-0">
            <div className="mb-6">
              <h6 className="text-lg font-semibold mb-4">Top Products</h6>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Managed Website
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Manage Reputation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Power Tools
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Marketing Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-2/4 px-4 mb-6 md:mb-0">
            <div className="mb-6">
              <h6 className="text-lg font-semibold mb-4">Newsletter</h6>
              <p className="mb-4">
                You can trust us. We only send promo offers, not a single spam.
              </p>
              <div id="mc_embed_signup">
                <form
                  target="_blank"
                  noValidate
                  action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                  method="get"
                  className="flex flex-wrap"
                >
                  <div className="w-full lg:w-3/4 pr-2 mb-4 lg:mb-0">
                    <input
                      name="EMAIL"
                      placeholder="Enter Email"
                      onFocus={(e) => (e.target.placeholder = "")}
                      onBlur={(e) => (e.target.placeholder = "Enter Email")}
                      required
                      type="email"
                      className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400"
                    />
                    <div style={{ position: "absolute", left: "-5000px" }}>
                      <input
                        name="b_36c4fd991d266f23781ded980_aefe40901a"
                        tabIndex="-1"
                        value=""
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-1/4 pl-2">
                    <button className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
       
        </div>
        <div className="flex flex-wrap justify-between items-center mt-8">
          <p className="text-sm mb-0">
            &copy; <script>document.write(new Date().getFullYear());</script>{" "}
            All rights reserved | This template is made with{" "}
            <i className="fa fa-heart-o"></i> by{" "}
            <a
              href="https://colorlib.com"
              target="_blank"
              className="hover:text-gray-400"
            >
              Colorlib
            </a>
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fa fa-dribbble"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fa fa-behance"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
