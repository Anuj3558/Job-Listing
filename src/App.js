import React from 'react';
import './App.css';

import Navbar from './Components/navbar';
import Home from './Components/home';
import AboutUs from './Components/AboutUs';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<AboutUs />} />
    </Routes>
    <Footer />
  </BrowserRouter>
  );
}

export default App;
