import React, { useEffect, useState } from "react";
import { Container, Button, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../store/cartSlice";
import { fetchProducts } from "../../store/productSlice";

import Product from "./Product";

const Products = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.product);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchProducts());
    if (status === "idle") {
      setFilter(data);
      setLoading(false);
    }
  });

  const handleCart = (product) => {
    dispatch(add(product));
  };

  const products = filter?.slice(0,6).map((product) => (
    <Product key={product.id} product={product} handleCart={handleCart} />
  ));

  const filterProducts = (category) => {
    if (category === "") {
      setFilter(data);
    } else {
      const updatedList = data?.filter((item) => item.category === category);
      setFilter(updatedList);
    }
  };

  return (
    <div className="py-5">
      <Container>
        <h2 className="fw-semibold">Featured Products</h2>
        <div className="my-2 mb-5">
          <Button
            variant="transparent category rounded-0 shadow-none"
            onClick={() => filterProducts("")}
          >
            All
          </Button>
          <Button
            variant="transparent category rounded-0 shadow-none"
            onClick={() => {
              filterProducts("electronics");
            }}
          >
            Electronics
          </Button>
          <Button
            variant="transparent category rounded-0 shadow-none"
            onClick={() => filterProducts("jewelery")}
          >
            Jewelery
          </Button>
          <Button
            variant="transparent category rounded-0 shadow-none"
            onClick={() => filterProducts("men's clothing")}
          >
            Men's
          </Button>
          <Button
            variant="transparent category rounded-0 shadow-none"
            onClick={() => filterProducts("women's clothing")}
          >
            Women's
          </Button>
        </div>
        <Row>
          {loading ? (
            <div class="spinner-border mx-auto" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          ) : (
            products
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Products;
