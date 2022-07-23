import React, { useEffect, useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { AiOutlineHeart, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { TbArrowsCross } from "react-icons/tb";
import StarRatings from "react-star-ratings";
import { useDispatch, useSelector } from "react-redux";
import { add, increase, decrease } from "../../store/cartSlice";
import { addCompare } from "../../store/compareSlice";
import { addWishlist } from "../../store/wishlistSlice";

import { useNavigate } from "react-router-dom";
import ProductTab from "./ProductTab";
const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setProduct(json);
        setLoading(false);
      });
  }, [id]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const data = useSelector((state) => state?.cart?.cartItems);
  const recent = useSelector((state) => state?.recentView?.recentViewItems);

  const item = data?.find((item) => item.id === id);

  const recentView = recent.slice(-3).reverse().map((product) => (
    <div className="d-flex align-items-center mb-2">
      <div width="60px" height="60px" className="bg-light p-2" style={{borderRadius:"15px"}}>
        <img src={product.image} alt={product?.title} width="50px" height="50px" style={{borderRadius:"15px"}}/>
      </div>
      <Button
        onClick={() => navigate(`/product/${item?.id}`)}
        className="shadow-none bg-transparent text-dark text-start border-0"
      >
        {product?.title}
      </Button>
    </div>
  ))
  const productDetail = (
    <div className="py-5">
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
            onClick={() => navigate("/shop")}
          >
            shop
          </Button>{" "}
          /
          <Button
            className="shadow-none border-0 bg-transparent text-dark"
            onClick={() => navigate(`/shop/${id}`)}
          >
            {product?.title.slice(0, 15)}...
          </Button>
        </div>
      </div>
      <Row className="mt-5">
        <Col md={6} xs={12}>
          <InnerImageZoom
            src={product?.image}
            className=""
            alt={product?.title}
            zoomSrc={product?.image}
          />
        </Col>
        <Col md={6} xs={12}>
          <h1 className="fw-light fs-2 text-start">{product?.title}</h1>
          <h1 className="text-start">${product?.price}</h1>
          <p className="text-start text-justify">
            {product?.description?.slice(0, 150)}.
          </p>
          {item ? (
            <div className="d-flex">
              <Button
                className="rounded-0 bg-transparent border-dark shadow-none"
                onClick={() => dispatch(increase(product))}
              >
                <AiOutlinePlus className=" text-dark fs-5" />
              </Button>
              <p
                className="p-1 m-0 border border-dark rounded-0 fs-5"
                style={{ height: "40px", width: "40px" }}
              >
                {item?.cartQuantity}
              </p>
              <Button
                className="rounded-0 bg-transparent border-dark shadow-none"
                onClick={() => dispatch(decrease(product))}
              >
                <AiOutlineMinus className=" text-dark fs-5" />
              </Button>
            </div>
          ) : (
            <div className="w-100 text-start">
              <Button
                style={{ backgroundColor: "black", borderRadius: "15px" }}
                className="px-4 py-3 bg-dark border-0 shadow-none"
                onClick={() => dispatch(add(product))}
              >
                Add To Cart
              </Button>
            </div>
          )}
          <div className="d-flex align-items-center mt-3">
            <Button
              className="bg-transparent shadow-none border-0 text-dark"
              onClick={() => dispatch(addWishlist(product))}
            >
              <AiOutlineHeart /> Add to wishlist
            </Button>
            <p className="m-0 p-0">|</p>
            <Button
              className="bg-transparent shadow-none border-0 text-dark"
              onClick={() => dispatch(addCompare(product))}
            >
              <TbArrowsCross /> Compare
            </Button>
          </div>
          <hr />
          <div className="d-flex align-items-center justify-content-between">
            <span className="text-start">Category: {product?.category}</span>
            {product && (
              <span>
                ({product?.rating?.count}) Ratings:{" "}
                <StarRatings
                  rating={Math.round(product?.rating?.rate)}
                  starDimension="20px"
                  starSpacing="5px"
                  numberOfStars={5}
                  starRatedColor="black"
                />
              </span>
            )}
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <h6 class="text-start">Recent viewed products</h6>
          <hr width="80%" style={{borderColor:"black", height:"1px"}}/>
          {recentView}
        </Col>
        <Col md={8}>
          <ProductTab description={product?.description} />
        </Col>
      </Row>
    </div>
  );

  return (
    <Container>
      {loading ? (
        <div class="spinner-border my-5" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      ) : (
        productDetail
      )}
    </Container>
  );

  // return <div>Hi</div>;
};

export default Product;
