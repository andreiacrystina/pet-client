import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Routes from './routes';

import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
