import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import SignUp from './pages/Signup';
import SignIn from './pages/Signin';
import Profile from "./pages/Profile";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Home path="/" />
      <About path="/about" />
      <Profile path="/profile" />
      <SignIn path="/signin" />
      <SignUp path="/sign-up" />
    </Router>
    <Footer />
    </>
  );
}

export default App;