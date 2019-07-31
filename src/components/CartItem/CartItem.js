import React from "react";
const style = {
  maxHeight: "200px"
};
export default function CartItem(props) {
  const handleClick = e => {
    e.preventDefault();
    props.remove(props.id);
  };
  return (
    <div class="card horizontal" style={style}>
      <div class="card-image">
        <img src={props.img} style={style} />
      </div>
      <div class="card-stacked">
        <div class="card-content ">
          <div>
            <h5>{props.title}</h5>
            <h6>{props.price}$</h6>
          </div>
        </div>
        <div class="card-action">
          <a href="#" onClick={handleClick}>
            Remove
          </a>
        </div>
      </div>
    </div>
  );
}
