import React from 'react';
import { FaFacebook, FaTwitter, FaDribbble, FaBehance, FaSearch, FaHeart, FaComment } from 'react-icons/fa';
import { HeroImg } from '../assets';

const BlogPosts = () => {
    return (
        <div>
            {/* Banner Area */}
            <section className="relative bg-cover bg-center h-64 flex items-center justify-center" style={{ backgroundImage: `url(${HeroImg})` }}>
        <div className="absolute inset-0 bg-purple-500 opacity-50"></div>
        <div className="container mx-auto text-center">
          <h1 className="text-white text-4xl">Blog</h1>
          <p className="text-white mt-4">
            <a href="index.html" className="hover:text-orange-500">Home</a>
            <span className="mx-2 text-orange-500">&gt;</span>
            <a href="about-us.html" className="hover:text-orange-500">blog</a>
          </p>
        </div>
      </section>

            {/* Blog Posts Area */}
            <section className="py-16 bg-gray-100 px-14">
                <div className="container mx-auto">
                    <div className="flex flex-wrap">
                        <div className="w-full lg:w-2/3">
                            {/* Single Post */}
                            <div className="bg-white -lg shadow-lg mb-8">
                                <img className="w-full -t-lg" src="img/blog/p1.jpg" alt="Post" />
                                <ul className="flex space-x-4 px-6 py-4 text-gray-600">
                                    <li><a href="#">Art</a></li>
                                    <li><a href="#">Technology</a></li>
                                    <li><a href="#">Fashion</a></li>
                                </ul>
                                <div className="px-6 pb-6">
                                    <a href="blog-single.html" className="block text-2xl font-semibold mb-2 hover:text-blue-500">Cartridge Is Better Than Ever A Discount Toner</a>
                                    <p className="text-gray-700 mb-4">
                                        MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training.
                                    </p>
                                    <div className="flex justify-between items-center text-gray-600">
                                        <div className="flex space-x-4">
                                            <a href="#" className="flex items-center"><FaHeart className="mr-2" /> 4 likes</a>
                                            <a href="#" className="flex items-center"><FaComment className="mr-2" /> 06 Comments</a>
                                        </div>
                                        <div className="flex space-x-4">
                                            <a href="#"><FaFacebook /></a>
                                            <a href="#"><FaTwitter /></a>
                                            <a href="#"><FaDribbble /></a>
                                            <a href="#"><FaBehance /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Additional posts can be replicated here... */}

                        </div>
                        <div className="w-full lg:w-1/3 pl-0 lg:pl-8">
                            {/* Search Widget */}
                            <div className="bg-white -lg shadow-lg p-6 mb-8">
                                <form className="relative">
                                    <input type="text" className="w-full p-3 -lg border border-gray-300" placeholder="Search Posts" />
                                    <button type="submit" className="absolute top-0 right-0 p-3 text-gray-600">
                                        <FaSearch />
                                    </button>
                                </form>
                            </div>

                            {/* Portfolio Widget */}
                            <div className="bg-white -lg shadow-lg p-6 mb-8 text-center">
                                <img src="img/blog/user2.jpg" alt="User" className="w-24 h-24 mx-auto -full mb-4" />
                                <a href="#" className="block text-xl font-semibold mb-2">Adele Gonzalez</a>
                                <p className="text-gray-600 mb-4">
                                    MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get.
                                </p>
                                <div className="flex justify-center space-x-4">
                                    <a href="#"><FaFacebook /></a>
                                    <a href="#"><FaTwitter /></a>
                                    <a href="#"><FaDribbble /></a>
                                    <a href="#"><FaBehance /></a>
                                </div>
                            </div>

                            {/* Category Widget */}
                            <div className="bg-white -lg shadow-lg p-6 mb-8">
                                <h4 className="text-xl font-semibold mb-4">Post Categories</h4>
                                <ul className="space-y-2">
                                    <li className="flex justify-between">
                                        <a href="#" className="text-gray-700 hover:text-blue-500">Technology</a>
                                        <span>37</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <a href="#" className="text-gray-700 hover:text-blue-500">Lifestyle</a>
                                        <span>24</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <a href="#" className="text-gray-700 hover:text-blue-500">Fashion</a>
                                        <span>59</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <a href="#" className="text-gray-700 hover:text-blue-500">Art</a>
                                        <span>29</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <a href="#" className="text-gray-700 hover:text-blue-500">Food</a>
                                        <span>15</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <a href="#" className="text-gray-700 hover:text-blue-500">Architecture</a>
                                        <span>09</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <a href="#" className="text-gray-700 hover:text-blue-500">Adventure</a>
                                        <span>44</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Recent Posts Widget */}
                            <div className="bg-white -lg shadow-lg p-6 mb-8">
                                <h4 className="text-xl font-semibold mb-4">Recent Posts</h4>
                                <div className="space-y-4">
                                    <div className="flex">
                                        <img src="img/blog/r1.jpg" alt="Recent Post" className="w-16 h-16 -lg mr-4" />
                                        <div>
                                            <a href="blog-single.html" className="text-lg font-semibold hover:text-blue-500">Home Audio Recording For Everyone</a>
                                            <p className="text-gray-500 text-sm">02 hours ago</p>
                                        </div>
                                    </div>
                                    
                                    {/* Additional recent posts can be replicated here... */}
                                    
                                </div>
                            </div>

                            {/* Archive Widget */}
                            <div className="bg-white -lg shadow-lg p-6">
                                <h4 className="text-xl font-semibold mb-4">Post Archive</h4>
                                <ul className="space-y-2">
                                    <li className="flex justify-between">
                                        <a href="#" className="text-gray-700 hover:text-blue-500">Dec '17</a>
                                        <span>37</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <a href="#" className="text-gray-700 hover:text-blue-500">Nov '17</a>
                                        <span>24</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <a href="#" className="text-gray-700 hover:text-blue-500">Oct '17</a>
                                        <span>59</span>
                                    </li>
                                    
                                    {/* Additional archive entries can be replicated here... */}
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogPosts;
