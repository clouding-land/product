import React, { useContext } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import SingleProduct from "../Components/SingleProduct";
import "../styles.css";
// import { AuthContext } from "../Contexts/AuthContextProvider";
//import datas from "../Components/data.json";

export default function Products() {
  // const { handleChange } = useContext(AuthContext);
  // handleChange();
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      setData(res.data);
      // console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody>
        {data.map((el) => {
        return <SingleProduct {...el} key={el.id} />;
      })}
        </tbody>
      </table>
    </div>
  );
}
