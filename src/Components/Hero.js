import React from 'react'
import "./hero.css"
import shoes from "../Assets/shoes.png"


const Hero = () => {
  return (
    <div className='hero'>
      <div style={{ border: "2px solid gray", width: "250px", padding: "5px 5px" }}>
        <h2>TRENDING NOW</h2>
        <div>
          <img src={shoes} alt='shoes' style={{ width: "200px" }} />
          <div style={{ display: "flex" }}>
            <p>RX-S Geek Unisex Sneaker</p>
            <p>Rs. 4999</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
