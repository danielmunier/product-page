import React from 'react'
import './cart.css'

const Cart = () => {
  return (
    <div className="cart-container">
      <div className="cart-items">
        <div className="cart-item">
          <img src="path_to_item_image" alt="Item" />
          <div className="cart-item-info">
            <h4>Item Name</h4>
            <p>Price x Quantity</p>
          </div>
          <button>Remove</button>
        </div>
      </div>
      <div className="cart-total">
        <span>Total</span>
        <span>$125.00</span>
      </div>
    </div>
  )
}

export default Cart
