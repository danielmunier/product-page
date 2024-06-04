import React from 'react'
import logo from "../assets/images/logo.svg"
import cart from "../assets/images/icon-cart.svg"
import avatar from "../assets/images/image-avatar.png"
import "./navbar.css"


const Navbar = () => { 


  return (
      <header>
        <img src={logo} alt="logo" />
          <ul>
            <li><a href="">Collections</a></li>
            <li><a href="">Men</a></li>
            <li><a href="">Women</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
          </ul>

        <div className='cartAvatar'>
          <img id='cart-button' src={cart} alt="Cart" />
          <img id='avatar-button' src={avatar} alt="" srcset="" />
        </div>
      </header>
  )
  
}

export default Navbar