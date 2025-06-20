import React from "react";
import { Link } from "react-router-dom";
import Data from "../../Data"

const Products = () => {

  const cardItem = (item) => {
    return (
      <div className="card my-5 py-4" key={item.id} style={{ width: "18rem" }}>
        <img src={item.img} alt="" className="card-img-top" />
        <div className="card-body text-center">
          <h5 className="card-title">{item.title}</h5>
          <p>#{item.price}</p>
          <Link to={`/product/${item.id}`} className="btn btn-outline-primary">
            Buy Now
          </Link>
        </div>
      </div>
    );
  };
  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Products</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-around">
          {Data.map(cardItem)}
        </div>
      </div>
    </div>
  );
};

export default Products;
