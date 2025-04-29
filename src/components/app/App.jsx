// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
// import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CameraShop from '../cameraShop/CameraShop.jsx';
import Shop from '../shop/Shop.jsx';
import ShoppingCartSection from '../shop/ShoppingCartSection.jsx';
import Content from '../../Content/Content.jsx';
import Counter from '../Counter.jsx';
import Counter_function from '../Counter_function.jsx';
import Onchange from '../form.jsx';
import ProductPage from '../ProductPage.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='camera' element = {<CameraShop/>}></Route>
          <Route path='shop' element = {<Shop/>}></Route>
          <Route path='shopping-cart' element = {<ShoppingCartSection/>}></Route>
          <Route path='camera2' element = {<Content/>}></Route>
          <Route path='counter' element = {<Counter/>}></Route>
          <Route path='counterFunction' element = {<Counter_function/>}></Route>
          <Route path='onchange' element = {<Onchange/>}></Route>
          <Route path='products' element = {<ProductPage/>}></Route>
        </Routes>
      </div>

    </Router>
  );
}

export default App;
