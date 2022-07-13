import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { SiKasasmart } from "react-icons/si";
import { Link, useNavigate } from "react-router-dom";
import { TiSocialFacebook } from "react-icons/ti";
import { BsInstagram, BsMessenger, BsWhatsapp } from "react-icons/bs";
import { AiOutlineYoutube } from "react-icons/ai";
import {BiPhoneCall} from "react-icons/bi"
import { FiMail } from "react-icons/fi";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-dark">
      <Container className="py-5 text-white fw-light ">
        <Row>
          <Col md={3} xs={12} className="text-start">
            <Button
              onClick={() => navigate("/")}
              className="d-flex cursor-pointer bg-transparent border-0 shadow-none"
            >
              <SiKasasmart className="fs-2" />
              <h2 className="m-0 p-0">Mart</h2>
            </Button>
            <span className="text-white">
              Demo ecommerce app created with MERN Stack.
            </span>
          </Col>
          <Col md={3} xs={12} className="text-start">
            <p className="fs-5">Contact</p>
            <a className="text-white text-decoration-none d-block" target="_blank" href="tel:+8801926519290" rel="noreferrer"><BiPhoneCall/> +8801926519290</a>
            <a className="text-white text-decoration-none d-block" target="_blank" href="mailto:dhrubo.hd@gmail.com" rel="noreferrer"><FiMail/> dhrubo.hd@gmail.com</a>
            <a className="text-white text-decoration-none d-block" target="_blank" href="https://wa.me/8801926519290" rel="noreferrer"><BsWhatsapp/> +8801926519290</a>
            <a className="text-white text-decoration-none d-block" target="_blank" href="http://m.me/dhrubo.051" rel="noreferrer"><BsMessenger/> dhrubo.051</a>
          </Col>
          <Col md={2} xs={12} className="text-start">
            <p className="fs-5">Categories</p>
            <ul className="list-style-none p-0">
              <Link
                to="shop/electronics"
                className="text-decoration-none text-white d-block"
              >
                &gt; Electronics
              </Link>
              <Link
                to="shop/jewelery"
                className="text-decoration-none text-white d-block"
              >
                &gt;  Jewelery
              </Link>
              <Link
                to="shop/men's%20clothing"
                className="text-decoration-none text-white d-block"
              >
                &gt;  Men's
              </Link>
              <Link
                to="shop/women's%20clothing"
                className="text-decoration-none text-white d-block"
              >
                &gt;  Women's
              </Link>
            </ul>
          </Col>
          <Col md={2} xs={12} className="text-start">
            <p className="fs-5">Important Links</p>
            <ul className="list-style-none p-0">
              <Link
                to="shop/electronics"
                className="text-decoration-none text-white d-block"
              >
                &gt;  Privacy Policy
              </Link>
              <Link
                to="shop/jewelery"
                className="text-decoration-none text-white d-block"
              >
                &gt;  Return Policy
              </Link>
              <Link
                to="shop/men's%20clothing"
                className="text-decoration-none text-white d-block"
              >
                 &gt; Become Seller
              </Link>
              <Link
                to="shop/women's%20clothing"
                className="text-decoration-none text-white d-block"
              >
                &gt; Become Affliate
              </Link>
            </ul>
          </Col>
          <Col md={2} xs={12} className="text-start">
            <p className="fs-5">Get In Touch</p>
            <div className="d-flex gap-1">
              <a
                style={{
                  height: "40px",
                  width: "50px",
                  backgroundColor: "#4267B2",
                }}
                className="rounded-circle text-white cursor-pointer d-flex justify-content-center align-items-center"
                href="https://www.facebook.com/"
                target="_blank" rel="noreferrer"
              >
                <TiSocialFacebook className="fs-2" />
              </a>
              <a
                style={{
                  height: "40px",
                  width: "50px",
                  backgroundColor: "hotpink",
                }}
                className="rounded-circle text-white cursor-pointer d-flex justify-content-center align-items-center"
                href="https://www.instagram.com/"
                target="_blank" rel="noreferrer"
              >
                <BsInstagram className="fs-4" />
              </a>
              <a
                style={{
                  height: "40px",
                  width: "50px",
                  backgroundColor: "red",
                }}
                className="rounded-circle text-white cursor-pointer d-flex justify-content-center align-items-center"
                href = "https://www.youtube.com/"
                target="_blank" rel="noreferrer"
              >
                <AiOutlineYoutube className="fs-2" />
              </a>
              <a
                style={{
                  height: "40px",
                  width: "50px",
                  backgroundColor: "#25D366",
                }}
                className="rounded-circle text-white cursor-pointer d-flex justify-content-center align-items-center"
                href="https://web.whatsapp.com/"
                target="_blank" rel="noreferrer"
              >
                <BsWhatsapp className="fs-5" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
        <div className="border-1 border-top border-secondary py-2 text-white">
          <p className="m-0">Designed & Developed By Dhrubo</p>
        </div>
    </div>
  );
};

export default Footer;
