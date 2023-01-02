import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../styles.css";
import DetailedProduct from "./DetailedProduct";

const SingleProduct = ({ image, title, id, price }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>₹{price}/-</td>
      <td>
        <Link to={"/products/" +id}>See More</Link>
      </td>
    </tr>
  );
};
export default SingleProduct;
