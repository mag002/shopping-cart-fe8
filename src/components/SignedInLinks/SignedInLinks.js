import React from "react";
import { Link } from "react-router-dom";
export default function SignedInLinks() {
  return (
    <ul className="right">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/product">Product</Link>
      </li>
      <li>
        <Link to="/cart" className="btn btn-floating pink lighten-1">
          CM
        </Link>
      </li>
    </ul>
  );
}
