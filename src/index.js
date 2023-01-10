import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';


import { Home, Product, Products, AboutPage, ContactPage, Cart, Login, Register, Checkout, PageNotFound } from "./pages"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/landing" element={<Home />} />
        <Route path="/landing/product" element={<Products />} />
        <Route path="/landing/product/:id" element={<Product />} />
        <Route path="/landing/about" element={<AboutPage />} />
        <Route path="/landing/contact" element={<ContactPage />} />
        <Route path="/landing/cart" element={<Cart />} />
        <Route path="/landing/login" element={<Login />} />
        <Route path="/landing/register" element={<Register />} />
        <Route path="/landing/checkout" element={<Checkout />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/landing/product/*" element={<PageNotFound />} />
      </Routes>
    </Provider>
  </BrowserRouter>
);