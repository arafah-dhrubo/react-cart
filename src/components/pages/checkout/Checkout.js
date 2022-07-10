
import React, { useEffect } from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  getTotals,
} from "../../store/cartSlice";
import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const Checkout = () => {
  const data = useSelector((state) => state.cart.cartItems);
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const products = data.map((item) => (
    <Row
      className="d-flex align-items-center border-bottom border-1 p-2"
      key={item.id}
    >
      <Col md={8} className="text-start border-0 d-flex">
        <img src={item.image} style={{ width: "50px" }} alt={item.title} />
        <Button
          onClick={() => navigate(`/product/${item.id}`)}
          className="shadow-none bg-transparent text-dark text-start border-0"
        >
          {item.title.slice(0, 45)}...
        </Button>
      </Col>
      <Col md={2} className="border-0">
        X{parseFloat(item.cartQuantity)}
      </Col>
      <Col md={2} className="border-0">
        ${parseFloat(item.price) * parseFloat(item.cartQuantity)}
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
          Checkout{" "}
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
                  checkout
                </Button>
              </div>
              
            </div>
            <Row>
              <Col xs={12} md={8}>
                <Form>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label className="text-start w-100">
                          First name
                        </Form.Label>
                        <Form.Control type="text" placeholder="First Name" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label className="text-start w-100">
                          Last name
                        </Form.Label>
                        <Form.Control type="text" placeholder="Last Name" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label className="text-start w-100">
                          Username
                        </Form.Label>
                        <Form.Control type="text" placeholder="Username" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label className="text-start w-100">
                        Email Address
                        </Form.Label>
                        <Form.Control type="text" placeholder="Email Address" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label className="text-start w-100">
                          Phone no
                        </Form.Label>
                        <Form.Control type="text" placeholder="Username" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label className="text-start w-100">
                        Tel (Optional)
                        </Form.Label>
                        <Form.Control type="text" placeholder="Email Address" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Col>
              <Col xs={12} md={4} className="position-relative">
                <h3 className="mb-3 text-start">Your Cart</h3>
                <div className="border border-3 p-2 position-absolute w-100">
                  {products}
                  <div className="d-flex justify-content-between">
                    <p>Total Item:</p> <p>X{cart.cartTotalQuantity}</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p>Total Amount:</p>
                    <p>${cart.cartTotalAmount}</p>{" "}
                  </div>
                  <Button
                    className="shadow-none border-0 bg-dark rounded-0 w-100"
                    onClick={() => navigate("/checkout")}
                  >
                    Checkout
                  </Button>
                </div>
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

export default Checkout;
