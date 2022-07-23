import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate} from "react-router-dom";
import { add } from "../../store/cartSlice";
import { fetchProducts } from "../../store/productSlice";
import Product from "../featured/Product";
import { Row, Container, Button } from "react-bootstrap";
import { BsArrowLeft } from "react-icons/bs";

const AllProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data} = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  });

  const handleCart = (product) => {
    dispatch(add(product));
  };

  const products = data.map((product) => (
    <Product key={product.id} product={product} handleCart={handleCart} />
  ));
  return (
    <div>
      <div className="bg-dark bg-gradient py-5">
        <h1 className="text-uppercase text-white">
          <BsArrowLeft
            className="cursor-pointer"
            onClick={() => navigate(-1)}
          />{" "}
          All Products{" "}
        </h1>
      </div>
      <div className="py-5">
        <Container>
          <div className="d-flex justify-content-between mb-5">
            <div className="d-flex align-items-center">
              <Button
                className="shadow-none border-0 bg-transparent text-dark"
                onClick={() => navigate("/")}
              >
                home
              </Button>{" "}
              /
              <Button
                className="shadow-none border-0 bg-transparent text-dark"
                onClick={() => navigate("/shop/")}
              >
                shop
              </Button>
            </div>
          </div>
          <Row className="d-flex g-5">{products}</Row>
        </Container>
      </div>
    </div>
  );
};

export default AllProduct;
