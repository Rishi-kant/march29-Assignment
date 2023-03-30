import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/home/home';
import About from './pages/about/about';
import Login from './pages/login/login';
import Register from './pages/register/register';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route path="/about"  element={<About/>}/>
      <Route path="/login"  element={<Login/>}/>
      <Route path="/register"  element={<Register/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


