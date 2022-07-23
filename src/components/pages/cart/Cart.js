import React, { useEffect } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  remove,
  increase,
  decrease,
  clear,
  getTotals,
} from "../../store/cartSlice";
import { useNavigate } from "react-router-dom";
import { BsXLg, BsArrowLeft } from "react-icons/bs";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { addrecentView } from "../../store/recentViewSlice";

const Cart = () => {
  const data = useSelector((state) => state.cart.cartItems);
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleRemove = (product) => {
    dispatch(remove(product));
  };

  const increaseItem = (product) => {
    dispatch(increase(product));
  };

  const decreaseItem = (product) => {
    dispatch(decrease(product));
  };

  const products = data?.map((item) => (
    <Row
      className="d-flex align-items-center border-bottom border-1"
      key={item?.id}
    >
      <Col md={1} className="border-0">
        <Button
          className="shadow-none bg-transparent text-dark border-0"
          onClick={() => handleRemove(item?.id)}
        >
          <BsXLg />
        </Button>
      </Col>
      <Col md={4} className="text-start border-0 d-flex">
        <img src={item?.image} style={{ width: "50px" }} alt={item?.title} />
        <Button
          onClick={() => {
            navigate(`/product/${item?.id}`);
            dispatch(addrecentView(item));
          }}
          className="shadow-none bg-transparent text-dark text-start border-0"
        >
          {item?.title?.slice(0, 25)}...
        </Button>
      </Col>
      <Col md={2} className="border-0">
        ${parseFloat(item.price)}
      </Col>
      <Col md={3} className="border-0 d-flex">
        <Button
          className="rounded-0 bg-transparent border-dark shadow-none"
          onClick={() => increaseItem(item)}
        >
          <AiOutlinePlus className=" text-dark fs-5" />
        </Button>
        <p
          className="p-1 m-0 border border-dark rounded-0 fs-5"
          style={{ height: "40px", width: "40px" }}
        >
          {item.cartQuantity}
        </p>
        <Button
          className="rounded-0 bg-transparent border-dark shadow-none"
          onClick={() => decreaseItem(item)}
        >
          <AiOutlineMinus className=" text-dark fs-5" />
        </Button>
      </Col>
      <Col md={2} className="border-0">
        ${parseFloat(item.price) * parseFloat(item.cartQuantity)}
      </Col>
    </Row>
  ));

  return (
    <div>
      <div className="bg-dark bg-gradient py-5">
        <h1 className="text-uppercase text-white">
          <BsArrowLeft
            className="cursor-pointer"
            onClick={() => navigate(-1)}
          />{" "}
          Cart{" "}
        </h1>
      </div>
      <Container>
        {data.length > 0 ? (
          <div className="my-5">
            <div className="d-flex justify-content-between mb-5">
              <div className="d-flex align-items-center">
                <Button
                  className="shadow-none ps-0 border-0 bg-transparent text-dark"
                  onClick={() => navigate("/")}
                >
                  home
                </Button>{" "}
                /
                <Button
                  className="shadow-none border-0 bg-transparent text-dark"
                  onClick={() => navigate("/cart")}
                >
                  cart
                </Button>
              </div>
              <Button
                style={{ borderRadius: "15px" }}
                className="shadow-none border-0 bg-dark px-3 py-2"
                onClick={() => dispatch(clear())}
              >
                Clear
              </Button>
            </div>
            <Row>
              <Col xs={12} md={8}>
                <Table>
                  <thead>
                    <Row>
                      <Col md={1}></Col>
                      <Col md={4}>Product</Col>
                      <Col md={2}>Price</Col>
                      <Col md={3}>Quantity</Col>
                      <Col md={2}>Subtotal</Col>
                    </Row>
                  </thead>
                  <tbody>{products}</tbody>
                </Table>{" "}
              </Col>
              <Col xs={12} md={4} className="position-relative">
                <div
                  className="border border-3 p-2 position-absolute w-100"
                  style={{ borderRadius: "15px" }}
                >
                  <h3 className="mb-3">Cart total</h3>
                  <p className="text-start">
                    Total Item: {cart.cartTotalQuantity}
                  </p>
                  <p className="text-start">
                    Total Amount: ${cart.cartTotalAmount}
                  </p>
                  <Button
                    style={{ borderRadius: "15px" }}
                    className="shadow-none border-0 bg-dark p-3 w-100"
                    onClick={() => navigate("/checkout")}
                  >
                    Checkout
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
        ) : (
          <div className="my-5">
            <h3>Empty Cart</h3>
            <Button
              className="shadow-none border-0 bg-dark rounded-0 mt-2"
              onClick={() => navigate("/shop")}
            >
              Go To Shop
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Cart;
