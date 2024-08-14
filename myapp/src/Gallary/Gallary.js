import React from 'react';
import './Gallary.css';
import Header from '../Home/Header/Header';
import MainSearch from './Search/MainSearch';
import Footer from '../Footer/Footer';
import Book from './Book/Book';
import Contact from '../Home/Contact/Contact';
import About from '../Home/About/About';

export default function Gallary() {
  return (
    <div>
      <Header/>
      <MainSearch/>
      <Book/>
      <Contact/>
      <Footer/>
    </div>
  )
}
