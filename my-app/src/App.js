import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-dom-router';

//pages and components
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Routes>
         <Route path="/login" element={<Login />}/>
         <Route path="/signup" element={<Signup />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
