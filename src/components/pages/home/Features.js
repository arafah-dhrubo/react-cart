import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import { FiPercent } from "react-icons/fi";
import { GiReceiveMoney } from "react-icons/gi";
import { MdDeliveryDining } from "react-icons/md";

const Features = () => {
  return (
    <div className="py-5 text-start">
      <Container>
        <Row>
          <Col
            md={3}
            xs={12}
            className="  d-flex p-2  align-items-center"
          >
            <div
              style={{ width: "80px", height: "80px" }}
              className="d-flex align-items-center bg-light me-2"
            >
              <MdDeliveryDining className="fs-1 mx-auto" />
            </div>
            <div>
              <h5>Fastest Delivery</h5>
              <p className="m-0">Delivery in 24 hours</p>
            </div>
          </Col>
          <Col
            md={3}
            xs={12}
            className="  d-flex p-2  align-items-center"
          >
            <div
              style={{ width: "80px", height: "80px" }}
              className="d-flex align-items-center bg-light me-2"
            >
              <FiPercent className="fs-1 mx-auto" />
            </div>
            <div>
              <h5>Happy Buyers</h5>
              <p className="m-0">100% happy delivery</p>
            </div>
          </Col>
          <Col
            md={3}
            xs={12}
            className="  d-flex p-2  align-items-center"
          >
            <div
              style={{ width: "80px", height: "80px" }}
              className="d-flex align-items-center bg-light me-2"
            >
              <CgArrowsExchangeAlt className="fs-1 mx-auto" />
            </div>
            <div>
              <h5>Easy return</h5>
              <p className="m-0">Don't like? Return!</p>
            </div>
          </Col>
          <Col
            md={3}
            xs={12}
            className="d-flex p-2  align-items-center"
          >
            <div
              style={{ width: "80px", height: "80px" }}
              className="d-flex align-items-center bg-light me-2"
            >
              <GiReceiveMoney className="fs-1 mx-auto" />
            </div>
            <div className="">
              <h5>Best Deals</h5>
              <p className="m-0">Buy in cheapest price</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Features;
