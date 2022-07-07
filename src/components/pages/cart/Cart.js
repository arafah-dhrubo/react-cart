import React, {useState} from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { remove, increase, decrease, clear } from "../../store/cartSlice";
import { useNavigate } from "react-router-dom";
import { BsXLg, BsArrowLeft } from "react-icons/bs";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Cart = () => {
  const data = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let [total, setTotal] = useState(0);

  const handleRemove = (product) => {
    dispatch(remove(product));
  };

  const increaseItem = (product) => {
    dispatch(increase(product));
  };

  const decreaseItem = (product) => {
    dispatch(decrease(product));
  };
  const products = data.map((item) => (
    <Row
      className="d-flex align-items-center border-bottom border-1"
      key={item.id}
    >
      <Col md={2} className="border-0">
        <Button
          className="shadow-none bg-transparent text-dark border-0"
          onClick={() => handleRemove(item.id)}
        >
          <BsXLg />
        </Button>
      </Col>
      <Col md={4} className="text-start border-0 d-flex">
        <img src={item.image} style={{ width: "50px" }} />
        <Button
          onClick={() => navigate(`/product/${item.id}`)}
          className="shadow-none bg-transparent text-dark text-start border-0"
        >
          {item.title.slice(0, 25)}...
        </Button>
      </Col>
      <Col md={2} className="border-0">
        ${parseInt(item.price)}
      </Col>
      <Col md={2} className="border-0 d-flex">
        <Button className="rounded-0 bg-transparent border-dark shadow-none">
          <AiOutlinePlus
            className=" text-dark fs-5"
            onClick={() => increaseItem(item)}
          />
        </Button>
        <p
          className="p-1 m-0 border border-dark rounded-0 fs-5"
          style={{ height: "40px", width: "40px" }}
        >
          {item.cartQuantity}
        </p>
        <Button className="rounded-0 bg-transparent border-dark shadow-none">
          <AiOutlineMinus
            className=" text-dark fs-5"
            onClick={() => decreaseItem(item)}
          />
        </Button>
      </Col>
      <Col md={2} className="border-0">
        ${parseInt(item.price) * parseInt(item.cartQuantity)}
      </Col>
    </Row>
  ));

  return (
    <div>
      <div className="bg-dark bg-gradient py-5 mb-5">
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
          <div>
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
                className="shadow-none border-0 bg-dark rounded-0"
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
                      <Col md={2}>Remove</Col>
                      <Col md={4}>Product</Col>
                      <Col md={2}>Price</Col>
                      <Col md={2}>Quantity</Col>
                      <Col md={2}>Subtotal</Col>
                    </Row>
                  </thead>
                  <tbody>{products}</tbody>
                </Table>{" "}
              </Col>
              <Col xs={12} md={4}>
                <h3>Cart total</h3>
                <p>{total}</p>
              </Col>
            </Row>
          </div>
        ) : (
          <div>
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
