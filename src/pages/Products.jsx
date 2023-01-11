import React from 'react'
import { Footer, Navbar, Product } from "../components";
import {Helmet} from "react-helmet-async";

const Products = () => {
  return (
    <> 
      <Helmet>
          <meta charSet="utf-8" />
          <title>Producto</title>
          <meta name="description" content="Ofrecemos cursos en línea de belleza de alta calidad." />
          <link rel="canonical" href="/landing/product" />
      </Helmet>
      <Navbar />
      <Product />
      <Footer />
    </>
  )
}

export default Products