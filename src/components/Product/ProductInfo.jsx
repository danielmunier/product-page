import React, { useState } from 'react'
import imageProduct1 from "../../assets/images/image-product-1.jpg";
import imageProduct2 from "../../assets/images/image-product-2.jpg";
import imageProduct3 from "../../assets/images/image-product-3.jpg";
import imageProduct4 from "../../assets/images/image-product-4.jpg";

import plusSign from "../../assets/images/icon-plus.svg";
import minusSign from "../../assets/images/icon-minus.svg";
import cart from "../../assets/images/icon-cart.svg";

import "./productinfo.css"


const ProductInfo = () => {

    const [quantity, setQuantity] = useState(0);
   

  return (
    <div className="product_info">
        <h3>Sneaker Company</h3>
        <h1>Fall Limited Edition Sneakers</h1>
        <p className="product_description">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>

        <div id="product_prices">
          <div id="product_price">
            <span id="price">$125.00</span>
            <span id="discount">50%</span>
          </div>
          <span id="original_price">$250.00</span>
        </div>

        <div className="controls">
          <div id="control_quantity">
            <img
              onClick={() => {
                setQuantity(quantity - 1);
              }}
              src={minusSign}
              alt=""
            />
            <span>{quantity}</span>
            <img
              onClick={() => {
                setQuantity(quantity + 1);
              }}
              src={plusSign}
              alt=""
            />
          </div>

          <button id="add_cart">
            <img src={cart} alt="" />
            <span>Add to cart</span>
          </button>
        </div>
      </div>
  )
}

export default ProductInfo