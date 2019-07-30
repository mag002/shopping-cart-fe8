import React from "react";

export default function Product(props) {
  const handleClick = e => {
    e.preventDefault();
    props.addToCart({
      id: props.id,
      name: props.title,
      price: props.price,
      image: props.img
    });
  };
  return (
    <div className="col s12 m3">
      <div className="card">
        <div className="card-image">
          <img src={props.img} />
          <span className="card-title">{props.title}</span>
        </div>
        <div className="card-content">
          <p>{props.price}$</p>
        </div>
        <div className="card-action">
          <a href="#" onClick={handleClick}>
            ADD
          </a>
        </div>
      </div>
    </div>
  );
}
