import React from "react";
import "./product.css";
import mainPhoto from "../assets/images/image-product-1.jpg";
import imageCarrousel1 from "../assets/images/image-product-1-thumbnail.jpg";
import imageCarrousel2 from "../assets/images/image-product-2-thumbnail.jpg";
import imageCarrousel3 from "../assets/images/image-product-3-thumbnail.jpg";
import imageCarrousel4 from "../assets/images/image-product-4-thumbnail.jpg";

import cart from "../assets/images/icon-cart.svg"


const Product = () => {




  return (
    <div className="container">
      <div className="photos">
        <img
          className="main_photo"
          src={mainPhoto}
          alt="Main image of the product"
          srcset=""
        />
        <div className="photos_carrousel">
          <img src={imageCarrousel1} alt="" />
          <img src={imageCarrousel2} alt="" />
          <img src={imageCarrousel3} alt="" />
          <img src={imageCarrousel4} alt="" />
        </div>
      </div>

      <div className="product_info">
        <h3>Sneaker Company</h3>
        <h1>Fall Limited Edition Sneakers</h1>
        <p className="product_description">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>

        <div id="product_price">
          <span id="price">$125.00</span>
          <span id="discount">50%</span>
        </div>
        <span id="original_price">$250.00</span>

        <div>

              <div>
                <input type="number" id="quantity" />
              </div>


            <button id="add_cart">
                <img src={cart} alt="" />
                <span>Add to cart</span>
                </button>
        </div>


      </div>
    </div>
  );
};

export default Product;
