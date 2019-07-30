import React from "react";
import { Link } from "react-router-dom";
export default function SignedInLinks() {
  return (
    <ul className="right">
      <li>
        <Link to="/">Signup</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );
}
