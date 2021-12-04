import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Profile from "./pages/Profile";
import Footer from "./components/Footer/Footer";
import FindVolunteers from "./pages/FindVolunteers";

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/about" element={<About />}/>
         <Route path="/profile" element={<Profile />}/>
         <Route path="/signin" element={<Signin />}/>
         <Route path="/signup" element={<Signup />}/>
         <Route path='/findvolunteers' element={<FindVolunteers/>}/>
       </Routes>
       </BrowserRouter>
    <Footer />
    </>
  );
}

export default App;