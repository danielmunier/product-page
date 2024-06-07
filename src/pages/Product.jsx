import React, { useState } from "react";
import "./product.css";


import Slider from "../components/Product/Slider";
import ProductInfo from "../components/Product/ProductInfo";

const Product = () => {
 


  return (
    <div className="container">
      <Slider/>
      <ProductInfo/>
      
    </div>
  );
};

export default Product;
