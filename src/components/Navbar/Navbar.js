import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "../SignedInLinks/SignedInLinks";
export default function Navbar() {
  return (
    <nav>
      <div class="nav-wrapper grey darken-3">
        <Link to="/" className="brand-logo">
          Logo
        </Link>
        {/* <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul> */}
        <SignedInLinks />
      </div>
    </nav>
  );
}
