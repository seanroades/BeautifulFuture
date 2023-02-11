import '../App.css';
import React from 'react';
import logo from '../atom.png';
import { useNavigate } from 'react-router-dom';

export default function Error() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Error 404: Page offline</h1>
        <button onClick={() => navigate('/')}>Return to home</button>
      </header>
    </div>
  )
}