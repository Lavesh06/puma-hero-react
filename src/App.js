import React from 'react'
import "./App.css" 
import Hero from './Components/Hero'
import Header from './Components/Header'
import Footer from './Components/Footer'

const app = () => {
  return (
    <div className='app'>
      <Header/>
      <div style={{display:"flex", justifyContent:"space-between",padding:"100px"}}>
         <Hero/>
         <Hero/>
         <Hero/>
         <Hero/>
         <Hero/>
         
      </div>
     
      <Footer/>
    </div>
  )
}

export default app;
