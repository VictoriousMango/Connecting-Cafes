import { useState } from 'react';
import NavigationBar from './components/NavigationBar';
import HomeContent from './components/HomeContent';
import Login from './components/Login';
import Wishlist from './components/Wishlist';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    //BEM
    <Router>
      <div className="app">
      
        <Routes>
          {/* Login Page */}
          <Route path="/login" element={
            <>
            <Login /> {/* HomeContent */}
            </>
          } />

          {/* History Page */}
          <Route path="/history" element={
            <>
            <NavigationBar /> {/* Navigation Bar */}
            <h1>History</h1> {/* HomeContent */}
            </>
          } />

          {/* Premium Page */}
          <Route path="/premium" element={
            <>
            <NavigationBar /> {/* Navigation Bar */}
            <h1>Premium</h1> {/* HomeContent */}
            </>
          } />

          {/* Wishlist Page */}
          <Route path="/wishlist" element={
            <>
            <NavigationBar /> {/* Navigation Bar */}
            <Wishlist /> {/* HomeContent */}
            </>
          } />

          {/* Home Page */}
          <Route path="/" element={
            <>
            <NavigationBar /> {/* Navigation Bar */}
            <HomeContent /> {/* HomeContent */}
            </>
          }/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
