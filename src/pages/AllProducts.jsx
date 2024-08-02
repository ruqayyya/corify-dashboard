import { FaTrash, FaEdit } from "react-icons/fa";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import axios from "axios";

const AllProducts = () => {
  const [loading, setLoading] = useState(false);
  const [allProduct, setAllProduct] = useState([]);
  const getAllProducts = async () => {
    setLoading(true);
    try {
      const res = await axios
        .get(process.env.REACT_APP_ALL_PRODUCTS)
        .then((res) => {
          setAllProduct(res.data);
        });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };


  useEffect(()=>{
    getAllProducts();
  },[]);



  const removeProduct=async (productId)=>{
    try {
      const res=await axios.delete(`${process.env.REACT_APP_DELETE_PRODUCT}/${productId}`).then(res=>res.data);
      setAllProduct(res);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <section className="allCars">
      {loading && <Loader />}
      <div className="container">
        <div className="row">
          <h2 className="title">All product List</h2>
          <table className="table">
            <thead>
              <tr>
                <th>No</th>
                <th>Product Image</th>
                <th>Product Name</th>
                <th>Product Details</th>
                <th>Product Price</th>
                <th>Sale Price</th>
                <th>Edit Product</th>
              </tr>
            </thead>
            <tbody>
              {allProduct.map((item,index) => (
                <tr key={item.id}>
                  <td>{index+1}</td>
                  <td className="productImg">
                    <img  src={`${process.env.REACT_APP_URL}/${item.productImage}`} alt="ProductImg" />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.details}</td>
                  <td>€{item.price}</td>
                  <td>€{item.old_price}</td>
                  <td className="edit">
                    <Link to={`/edit-product/${item.id}`}>
                      <FaEdit />
                    </Link>
                    <FaTrash onClick={()=>removeProduct(item.id)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
