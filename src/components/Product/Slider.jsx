import React, { useState } from 'react'

import imageProduct1 from "../../assets/images/image-product-1.jpg"
import imageProduct2 from "../../assets/images/image-product-2.jpg";
import imageProduct3 from "../../assets/images/image-product-3.jpg";
import imageProduct4 from "../../assets/images/image-product-4.jpg";


import rightArrow from "../../assets/images/icon-next.svg";
import leftArrow from "../../assets/images/icon-previous.svg";

import "./slider.css"


const Slider = () => {
  const [quantity, setQuantity] = useState(0);
  const [mainImageIndex, setMainImageIndex] = useState(0);

  const thumbnails = [
    imageProduct1,
    imageProduct2,
    imageProduct3,
    imageProduct4,
  ];
  
  const handleNextImage = (direction) => {
    if (direction === "next") {
      setMainImageIndex((prevIndex) => (prevIndex + 1) % thumbnails.length);
    } else if (direction === "previous") {
      setMainImageIndex((prevIndex) =>
        prevIndex === 0 ? thumbnails.length - 1 : prevIndex - 1
      );
    }}
   

  return (
    <div className="photos">

      {/* Slider */}
    <div
      className="slider"
      style={{ backgroundImage: `url(${thumbnails[mainImageIndex]})` }}
    >
      <button onClick={() => {
        handleNextImage("previous")
      }}>
        <img className="arrow" src={leftArrow} alt="Previous arrow" />
      </button>
      <button onClick={() => {
        handleNextImage("next")
      }}>
        <img className="arrow" src={rightArrow} alt="Next arrow" />
      </button>


    </div>
    {/* Thumbnails */}
    <div className="photos_carrousel">
      {thumbnails.map((image, index) => {
        return (
          <img
            onClick={() => {
             setMainImageIndex(index);
            }}
            key={index}
            src={image}
          />
        );
      })}
    </div>
  </div>
  )
}


export default Slider