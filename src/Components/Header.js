import React from 'react'
import "./header.css"
import pumalogo from "../Assets/puma logo.png"

const Header = () => {
  return (
    <div className='header'>
        <div>
          <img src={pumalogo} alt='pumalogo' style={{width:"50px"}}/>
        </div>

      <div className='listitem'>
        <ul>
            <li>New</li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Sports</li>
        </ul>

      </div>
    </div>
  )
}

export default Header;
