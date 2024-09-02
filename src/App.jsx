import { useState } from 'react'
import Header from './components/header/header'
import './App.css'
import About from './components/about/about'
import Offer from './components/offer/offer'
import Client from './components/client/client'
import Blog from './components/blog/blog'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
import CopyRight from './components/copyright/copyright'

function App() {

  return (
    <div>
      <Header />
      <About />
      <Offer />
      <Client />
      <Blog />
      <Contact />
      <Footer />
      <CopyRight />
    </div>
  )
}

export default App
