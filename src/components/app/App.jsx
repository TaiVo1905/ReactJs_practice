// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
// import ReactDOM from 'react-dom/client';
import CameraShop from '../cameraShop/CameraShop.jsx';
import Shop from '../shop/Shop.jsx';
import ShoppingCartSection from '../shop/ShoppingCartSection.jsx';

function App() {
  return (
    <div className="App">
      <CameraShop/>
      <Shop/>
      <ShoppingCartSection/>
    </div>
  );
}

export default App;
