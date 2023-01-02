import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const Nav = () => {
  const userLogged = "no";
  return (
    <div className="navbar">
      <span>
        <Link to={"/"}>Home</Link>
      </span>
      <span>
        <Link to={"/products"}>Products</Link>
      </span>
    </div>
  );
};
export default Nav;
