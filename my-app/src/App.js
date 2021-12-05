import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from "./hooks/useAuthContext";
import Home from './pages/Home';
import About from './pages/About';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import ProfilePage from "./pages/ProfilePage";
import Footer from "./components/Footer/Footer";
import FindVolunteers from "./pages/FindVolunteers";
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
         <Route path="/profile" element={<ProfilePage />}/> 
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