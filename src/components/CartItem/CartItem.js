import React from "react";
const style = {
  maxHeight: "200px"
};
export default function CartItem(props) {
  return (
    <div class="card horizontal" style={style}>
      <div class="card-image">
        <img src={props.img} style={style} />
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <span class="card-title">{props.title}</span>
          <p>
            I am a very simple card. I am good at containing small bits of
            information.
          </p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  );
}
