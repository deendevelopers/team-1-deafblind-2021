import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from "./hooks/useAuthContext";
import Home from './pages/Home.js';
import About from './pages/About.js';
import Signup from './pages/Signup.js';
import Signin from './pages/Signin.js';
import Profile from "./pages/Profile.jsx";
import Footer from "./components/Footer/Footer.js";
import FindVolunteers from "./pages/FindVolunteers.js";
import ProfileVolunteerForm from './pages/ProfileVolunteerForm';


function App() {
  
  const { user, authIsReady } = useAuthContext()
  return (
    <>
  {authIsReady && (
     <BrowserRouter>
      <Navbar />
      <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/about" element={<About />}/>
         <Route path="/profile" element={<Profile />}/> 
         <Route path="/signin" element={user ? <Navigate replace to="/"/> : <Signin/> }/>
         <Route path="/signup" element={user ? <Navigate replace to="/profilevolunteerform"/> : <Signup/>}/>
         <Route path='/findvolunteers' element={<FindVolunteers/>}/>
         <Route path='/profilevolunteerform' element={<ProfileVolunteerForm/>}/>
       </Routes>
       </BrowserRouter>
       )}
    <Footer />
    </>
  );
}

export default App;