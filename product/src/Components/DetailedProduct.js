import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import "../styles.css";

function DetailedProduct(){
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isError, setisError] = useState(false);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/" + id)
      .then((e) => setProduct(e.data))
      .catch((err) => setisError(true));
  }, []);
  return (
    <div className="tab">
      {isError ? (
        <h1>Product Not Found</h1>
      ) : (
        <>
        <tr><td>Product Id</td><td>{product.id}</td></tr>
        <tr><td>Product Name</td><td>{product.title}</td></tr>
        <tr><td>Product Price</td><td>{product.price}</td></tr>
        <tr><td>Product description</td><td>{product.description}</td></tr>
          
        </>
      )}
    </div>
  );
};
export default DetailedProduct;
