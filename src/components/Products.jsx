import React, { useState, useEffect } from "react";

import "react-loading-skeleton/dist/skeleton.css";

import { Link } from "react-router-dom";

import './components.css';

const dataFile = require('../data/data.json');




const Products = () => {
  const [data, setData] = useState([]);


  useEffect(() => {
    const getProducts = async () => {
      setData(dataFile);
      return;
    };
    getProducts();
  }, []);


  const ShowProducts = () => {
    return (
      <>
        {data.map((product) => {
          return (
            <div id={product.id} key={product.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
              <div className="card text-center h-100" key={product.id}>
                <img
                  className="image-card"
                  src={product.image}
                  alt="Card"
                  height={300}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {product.title.substring(0, 500)}
                  </h5>
                  <p className="card-text">
                    {product.description.substring(0, 500)}...
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item lead">$ {product.price}</li>
                  {/* <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Vestibulum at eros</li> */}
                </ul>
                <div className="card-body">
                  <Link to={"/landing/product/" + product.id} className="btn btn-dark m-1">
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>

          );
        })}
      </>
    );
  };
  return (
    <>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center main-product-title">Productos disponibles!</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          {<ShowProducts />}
        </div>
      </div>
    </>
  );
};

export default Products;
