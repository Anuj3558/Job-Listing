import React from 'react';
import './App.css';

import Navbar from './Components/navbar';
import Home from './Components/home';
import AboutUs from './Components/AboutUs';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Signup from './Components/Signup';
import BlogPosts from './Components/BlogPage';
import BlogSingle from './Components/SingleBlogPost';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />
      <Route path='blog' element={<BlogPosts />} />
      <Route path='blog/:id' element={<BlogSingle />} />
    </Routes>
    <Footer />
  </BrowserRouter>
  );
}

export default App;
