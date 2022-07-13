import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsGenderMale, BsPhone } from "react-icons/bs";
import { GiBigDiamondRing } from "react-icons/gi";
import { IoFemaleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const navigate = useNavigate();
  return (
    <div className="py-5">
      <Container>
        <Row className="">
          <Col
            xs={6}
            md={3}
            className="cursor-pointer d-flex  px-5  align-items-center"
            onClick={() => navigate("/shop/electronics")}
          >
            <div
              className="p-2 mx-auto bg-light rounded-circle mb-2 pt-3"
              style={{ height: "70px", width: "70px" }}
            >
              <BsPhone className="fs-1" />
            </div>
            <p>Electronics</p>
          </Col>
          <Col
            xs={6}
            md={3}
            className="cursor-pointer d-flex  px-5  align-items-center"
            onClick={() => navigate("/shop/electronics")}
          >
            <div
              className="p-2 mx-auto bg-light rounded-circle mb-2 pt-3"
              style={{ height: "70px", width: "70px" }}
            >
              <GiBigDiamondRing className="fs-1" />
            </div>
            <p>Jewelery</p>
          </Col>
          <Col
            xs={6}
            md={3}
            className="cursor-pointer d-flex  px-5  align-items-center"
            onClick={() => navigate("/shop/electronics")}
          >
            <div
              className="p-2 mx-auto bg-light rounded-circle mb-2 pt-3"
              style={{ height: "70px", width: "70px" }}
            >
              <BsGenderMale className="fs-1" />
            </div>
            <p>Men's</p>
          </Col>
          <Col
            xs={6}
            md={3}
            className="cursor-pointer d-flex  px-5  align-items-center"
            onClick={() => navigate("/shop/electronics")}
          >
            <div
              className="p-2 mx-auto bg-light rounded-circle mb-2 pt-3"
              style={{ height: "70px", width: "70px" }}
            >
              <IoFemaleOutline className="fs-1" />
            </div>
            <p>Women's</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Category;
