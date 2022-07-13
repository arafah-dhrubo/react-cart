import "./App.css";
import React, { useEffect } from "react";
import Header from "./components/pages/header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/Home";
import NotFound from "./components/pages/notFound/NotFound";
import ScrollToTop from "react-scroll-to-top";
import { AiOutlineArrowUp } from "react-icons/ai";
import Product from "./components/pages/product/Product";

import Cart from "./components/pages/cart/Cart";
import Compare from "./components/pages/compare/Compare";
import Checkout from "./components/pages/checkout/Checkout";
import Shop from "./components/pages/shop/Shop";
import Login from "./components/pages/accounts/Login";
import Register from "./components/pages/accounts/Register";
import AllProduct from "./components/pages/shop/AllProduct";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchProducts } from "../src/components/store/productSlice";
import Footer from "./components/pages/footer/Footer";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <div className="App position-relative">
      <BrowserRouter>
        <Header />
        <ScrollToTop smooth component={<AiOutlineArrowUp className="fs-4" />} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/shop/:category" element={<Shop />} />
          <Route path="/shop/" element={<AllProduct />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
