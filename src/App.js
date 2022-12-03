import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './components/homepage/HomePage';
import CheckOut from './components/checkout/CheckOut';
import Header from './components/header/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route path='/checkout' element={<CheckOut/>} />
      </Routes>
    </div>
  );
}

export default App;
