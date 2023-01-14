import React, { useState, useEffect } from "react";

import "react-loading-skeleton/dist/skeleton.css";

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
                    {product.description.substring(0, 500)}
                  </p>
                </div>
               
                <div className="card-body">
                  <a className='btn btn-dark m-1 button-style' target="blank" href={product.url_sales}>
                    Lo quiero!
                  </a>
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


/*

                <ul className="list-group list-group-flush">
                  <li className="list-group-item lead">
                    {product.ofert?
                      <span className='price-red'>{product.price} <span className='unit'>US$</span></span>:
                      <span className='price-green'>{product.price} <span className='unit'>US$</span> </span>
                    }
                    {
                      product.ofert?
                        <span className='price-green'>{product.ofert} <span className='unit'>US$</span></span>:
                        <></>
                    }
                  </li>
                </ul>

*/