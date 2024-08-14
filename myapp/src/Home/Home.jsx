import React from 'react'
import Header from './Header/Header'
import Homenav from './Home-Nav/Homenav'
import Booksection from './BookSection/Booksection'
import Footer from '../Footer/Footer'
import Nav from '../Navigation/Nav'
import ImageSlide from './ImageSlide/ImageSlide'
import About from './About/About'
import Contact from './Contact/Contact'

export default function Home() {
  return (
    <div>
      <Header/>
      <br/><br/><br/>
      <ImageSlide/>
      <Booksection/>
      
      <Contact/>
      <Footer/>
    </div>
  );
}
