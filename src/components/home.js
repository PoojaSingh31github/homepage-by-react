import Header from './header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './footer';
import React from 'react'
import Homecover from './homecover';
import Slider from './slider';
import Slider2 from './slider2';

function Home() {
  return (
    <>
    <Header/>
    <Slider/>
    <Homecover/>
    <Slider2/>
    <Footer/>
    </>
  )
}

export default Home;