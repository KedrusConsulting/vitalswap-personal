import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/vitalswap-logo.svg";

function Logo() {
  return (
    <Link to="/#">
      <div className="vitalswap-logo">
        <img src={logo} alt="Vitalswap Logo" />
      </div>
    </Link>
  );
}

export default Logo;
