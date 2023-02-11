import '../App.css';
import React from 'react';
import logo from '../atom.png';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Beautiful Future</h1>
        
        <div className="ButtonMenu">
          <button onClick={() => navigate('/privacy-policy')}>See Privacy Policy</button>
        </div>
      </header>
    </div>
  )
}