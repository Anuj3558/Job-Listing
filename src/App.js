import React from 'react';
import './App.css';

import Navbar from './Components/navbar';
import Home from './Components/home';
import AboutUs from './Components/AboutUs';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />

    </Routes>
    <Footer />
  </BrowserRouter>
  );
}

export default App;
