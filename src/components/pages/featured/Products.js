import React, { useEffect, useState } from "react";
import { Container, Button, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add } from "../../store/cartSlice";

import Product from "./Product";

const Products = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  var { data } = useSelector((state) => state.product);
  var [filter, setFilter] = useState(data);
  const [category, setCategory] = useState("all");

  const handleCart = (product) => {
    dispatch(add(product));
  };

  const products = filter
    ?.slice(0, 8)
    .map((product) => (
      <Product key={product.id} product={product} handleCart={handleCart} />
    ));

  const filterProducts = (category) => {
    if (category === "") {
      setFilter(data);
      setCategory("all");
    } else {
      const updatedList = data?.filter((item) => item.category === category);
      setFilter(updatedList);
      setCategory(category);
    }
  };

  return (
    <div className="py-5" style={{ backgroundColor: "#F5F5F5" }}>
      <Container>
        <h2 className="fw-semibold">Featured Products</h2>
        <div className="my-2 mb-5">
          <Button
            className={`${
              category === "all" ? `border-0 border-bottom border-dark` : ``
            }`}
            variant="transparent category rounded-0 shadow-none"
            onClick={() => filterProducts("")}
          >
            All
          </Button>
          <Button
            className={`${
              category === "electronics"
                ? `border-0 border-bottom border-dark`
                : ``
            }`}
            variant="transparent category rounded-0 shadow-none"
            onClick={() => {
              filterProducts("electronics");
            }}
          >
            Electronics
          </Button>
          <Button
            className={`${
              category === "jewelery"
                ? `border-0 border-bottom border-dark`
                : ``
            }`}
            variant="transparent category rounded-0 shadow-none"
            onClick={() => filterProducts("jewelery")}
          >
            Jewelery
          </Button>
          <Button
            className={`${
              category === "men's clothing"
                ? `border-0 border-bottom border-dark`
                : ``
            }`}
            variant="transparent category rounded-0 shadow-none"
            onClick={() => filterProducts("men's clothing")}
          >
            Men's
          </Button>
          <Button
            className={`${
              category === "women's clothing"
                ? `border-0 border-bottom border-dark`
                : ``
            }`}
            variant="transparent category rounded-0 shadow-none"
            onClick={() => filterProducts("women's clothing")}
          >
            Women's
          </Button>
        </div>
        <Row className="g-5">
          {false ? (
            <div class="spinner-border mx-auto" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          ) : 
            <div>
              <Row className="g-5">{products}</Row>
              <Button
                style={{ borderRadius: "15px" }}
                className="shadow-none border-0 bg-dark px-4 py-3 mt-5"
                onClick={() =>
                  navigate(`/shop/${category === "all" ? "" : category}`)
                }
              >
                Show All
              </Button>
            </div>
          }
        </Row>
      </Container>
    </div>
  );
};

export default Products;
