import React, { useState } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { TbArrowsCross } from "react-icons/tb";
import { AiOutlineEye, AiOutlineDelete, AiOutlineHeart } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import ProductModal from "../../utils/ProductModal";
import { useDispatch } from "react-redux";
import { addCompare } from "../../store/compareSlice";
import { addWishlist } from "../../store/wishlistSlice";

const Product = ({ product, handleCart, removeFromWishlist }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const params = useLocation();
const param = params.pathname;
console.log(param.length)
  return (
    <Col xs={6} md={3}>
      <ProductModal handleClose={handleClose} show={show} product={product} />
      <Card className={`${param.length>1?'bg-light hover-shadow':'bg-white'} border-0 product`} style={{borderRadius:"15px"}}>
        <div
          className="p-3 bg-white m-3"
          style={{ width: "auto", height: "240px", borderRadius:"15px" }}
        >
          <Card.Img
            variant="top"
            src={product.image}
            style={{ height: "100%" }}
          />
          {removeFromWishlist?<Button
              className="cursor-pointer rounded-circle p-1 position-absolute bg-dark border-0 shadow-none product-button top-0 end-0 m-2"
              onClick={()=>removeFromWishlist(product)} style={{width:"35px", height:"35px"}}
            >
              <AiOutlineDelete className="fs-4"/>
            </Button>:""}
          <div
            style={{ width: "40px", height: "140px", margin:"55px 0", borderRadius:"15px" }}
            className="position-absolute top-0 bg-secondary product-button"
          >
            <Button
              className="p-2 mb-2 bg-transparent border-0 shadow-none"
              onClick={handleShow}
            >
              <AiOutlineEye className="fs-5" />
            </Button>
            <Button onClick={()=>dispatch(addWishlist(product))} className="p-2 mb-2 bg-transparent border-0 shadow-none">
              <AiOutlineHeart className="fs-5" />
            </Button>
            <Button
              className="p-2 bg-transparent border-0 shadow-none"
              onClick={() =>  dispatch(addCompare(product))}
            >
              <TbArrowsCross className="fs-5" />
            </Button>
          </div>
         
            <Button
            style={{backgroundColor:"black", borderRadius:"15px", margin:"-65px auto 0"}}
              className="shadow-none border-0 p-2 cart-button"
              onClick={() => handleCart(product)}
            >
              Add To Cart
            </Button>
        
        </div>
        <Card.Body className="p-0 py-4">
          <Card.Title className="fs-6 fw-normal">
            <Link
              to={`/product/${product.id}`}
              className="text-decoration-none link"
            >
              {product.title.slice(0, 25)}
            </Link>
          </Card.Title>
          <Card.Text className="text-secondary">${product.price}</Card.Text>
          
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
