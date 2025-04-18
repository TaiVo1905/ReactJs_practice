// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
// import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CameraShop from '../cameraShop/CameraShop.jsx';
import Shop from '../shop/Shop.jsx';
import ShoppingCartSection from '../shop/ShoppingCartSection.jsx';
import Content from '../../Content/Content.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='camera' element = {<CameraShop/>}></Route>
          <Route path='shop' element = {<Shop/>}></Route>
          <Route path='shopping-cart' element = {<ShoppingCartSection/>}></Route>
          <Route path='camera2' element = {<Content/>}></Route>
        </Routes>
      </div>

    </Router>
  );
}

export default App;
