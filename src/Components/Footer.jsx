import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#000000CC] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Top Products */}
          <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
            <h6 className="text-xl font-semibold mb-4">Top Products</h6>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">Managed Website</a></li>
              <li><a href="#" className="hover:text-blue-400">Manage Reputation</a></li>
              <li><a href="#" className="hover:text-blue-400">Power Tools</a></li>
              <li><a href="#" className="hover:text-blue-400">Marketing Service</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <h6 className="text-xl font-semibold mb-4">Newsletter</h6>
            <p className="mb-4">You can trust us. We only send promo offers, not a single spam.</p>
            <form
              target="_blank"
              novalidate
              action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
              method="get"
              className="flex flex-wrap"
            >
              <div className="w-full lg:w-2/3 mb-4 lg:mb-0">
                <input
                  name="EMAIL"
                  placeholder="Enter Email"
                  required
                  type="email"
                  className="w-full px-4 py-3 text-gray-800 bg-white border border-gray-300 "
                />
                <div style={{ position: 'absolute', left: '-5000px' }}>
                  <input
                    name="b_36c4fd991d266f23781ded980_aefe40901a"
                    tabIndex="-1"
                    type="text"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/3">
                <button
                  type="submit"
                  className="w-[90%] py-3 mx-4 px-5 bg-[#49e4fa] text-white  hover:bg-[#3db1c1] flex items-center justify-center"
                >
                  Subscribe
                  <span className="ml-2"><i className="fa fa-arrow-right"></i></span>
                </button>
              </div>
            </form>
          </div>

          {/* Instagram Feed */}
       
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-wrap justify-between items-center mt-8 border-t border-gray-700 pt-6">
          <p className="text-sm">
            &copy; <span>{new Date().getFullYear()}</span> All rights reserved | This template is made with <i className="fa fa-heart-o"></i> by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Colorlib</a>
          </p>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
