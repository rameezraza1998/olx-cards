import React from "react";
import "./card.css";

function Card({ price, src, description, address, day }) {
  return (
    <>
      <div className="card-container">
        <div className="image-container">
          <img src={src} alt="" />
        </div>

        <div className="Card-content1">
          <h4>Rs {price}</h4>
          <h4>Details</h4>
        </div>

        <h3>{description}</h3>

        <div className="info-container">
          <span>{address}</span>
          <span>{day}</span>
        </div>
      </div>
    </>
  );
}

export default Card;
