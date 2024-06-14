import React, { useState } from 'react'
import logo from "../assets/images/logo.svg"
import cart from "../assets/images/icon-cart.svg"
import avatar from "../assets/images/image-avatar.png"
import closeMenu from "../assets/images/icon-close.svg"
import "./navbar.css"
import Cart from './Cart'


const Navbar = () => { 
  const [active, setActive] = useState(false)
  const [cartVisible, setCartVisible] = useState(false)

  const handleOpenMenu = (e) => {
    setActive(!active)
  }

 

  return (
      <nav>
        <div className="mobile-menu" onClick={handleOpenMenu}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <img src={logo} alt="Main Logo" />

       

          <ul className={`nav-list ${active ? "active" : ""}`}>

            <div className='close-menu' onClick={handleOpenMenu}>
              <img src={closeMenu} alt="Close menu" />
            </div>

            <li><a href="/">Collections</a></li>
            <li><a href="/">Men</a></li>
            <li><a href="/">Women</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Contact</a></li>
          </ul>

        <div className='cart-avatar'>
          <button
          onClick={() => setCartVisible(!cartVisible)}
          ><img id='cart-button' src={cart} alt="Cart" /></button>
          {cartVisible ? <Cart /> : null}
          <button><img id='avatar-button' src={avatar} alt="" srcset="" /></button>
        </div>
      </nav>
  )
  
}

export default Navbar