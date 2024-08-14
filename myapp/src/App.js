// App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLanding from './Landing/MainLanding';
import Home from './Home/Home';

import OwnScript from './OwnScript/OwnScript';
import Gallary from './Gallary/Gallary';
import CartPage from './Cart/CartPage';
import { CartProvider } from './Cart/CartContext';
import Footer from './Footer/Footer';
import Cart from './Cart/Cart';
import Dashboard from './Dashboard/Dashboard';
import Payment from './Payment/Payment';
import { Checkbox } from '@mui/material';
import Checkout from './Checkout/Checkout';
import Contact from './Contact/Contact';
import Profile from './Home/Profile';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainLanding/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/dash" element={<Dashboard/>} />
          <Route path="/own" element={<OwnScript/>} />
          <Route path="/galary" element={<Gallary/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/check" element={<Checkout/>} />
          <Route path="/Profile" element={<Profile/>} />
          

          <Route path="/pay" element={<Payment/>} />
        </Routes>
      </Router>
    </CartProvider>

  );
}

export default App;
