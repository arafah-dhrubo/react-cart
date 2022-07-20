import React, { useState } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { AiOutlineHeart } from "react-icons/ai";
import { TbArrowsCross } from "react-icons/tb";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import ProductModal from "../../utils/ProductModal";
import { useDispatch } from "react-redux";
import { addCompare } from "../../store/compareSlice";

const Product = ({ product, handleCart }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const handleCompare = (product) => {
    dispatch(addCompare(product));
  };
  return (
    <Col xs={6} md={3}>
      <ProductModal handleClose={handleClose} show={show} product={product} />
      <Card className="product border-0 bg-light bg-transparent">
        <div
          className="p-3 bg-white"
          style={{ width: "auto", height: "275px", borderRadius:"15px" }}
        >
          <Card.Img
            variant="top"
            src={product.image}
            style={{ height: "100%" }}
          />
          <div
            style={{ width: "40px", height: "140px", margin:"55px 0" }}
            className="position-absolute top-0 bg-secondary product-button"
          >
            <Button
              className="p-2 mb-2 bg-transparent border-0 shadow-none"
              onClick={handleShow}
            >
              <AiOutlineEye className="fs-5" />
            </Button>
            <Button className="p-2 mb-2 bg-transparent border-0 shadow-none">
              <AiOutlineHeart className="fs-5" />
            </Button>
            <Button
              className="p-2 bg-transparent border-0 shadow-none"
              onClick={() => handleCompare(product)}
            >
              <TbArrowsCross className="fs-5" />
            </Button>
          </div>
        </div>
        <Card.Body className="p-0 pt-4">
          <Card.Title className="fs-6 fw-normal">
            <Link
              to={`/product/${product.id}`}
              className="text-decoration-none link"
            >
              {product.title.slice(0, 25)}
            </Link>
          </Card.Title>
          <Card.Text className="text-secondary">${product.price}</Card.Text>
          <div className="bg-dark position-absoulte cart-button" style={{borderRadius:"15px"}}>
            <Button
            style={{backgroundColor:"black", borderRadius:"15px"}}
              className="shadow-none border-0 bg-transparent px-4 py-3"
              onClick={() => handleCart(product)}
            >
              Add To Cart
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
