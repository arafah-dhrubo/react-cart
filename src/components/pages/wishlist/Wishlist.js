import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { add } from "../../store/cartSlice";
import Product from "../featured/Product";
import { Row, Container, Button } from "react-bootstrap";
import { BsArrowLeft } from "react-icons/bs";
import { removeWishlist } from "../../store/wishlistSlice";

const Wishlist = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.wishlist.wishlistItems);


  const handleCart = (product) => {
    dispatch(add(product));
  };

  const removeFromWishlist = (product) => {
    dispatch(removeWishlist(product));
  };

  const products = data.map((product) => (
    <Product key={product.id} product={product} handleCart={handleCart} removeFromWishlist={removeFromWishlist}/>
  ));
  return (
    <div>
      <div className="bg-dark bg-gradient py-5">
        <h1 className="text-uppercase text-white">
          <BsArrowLeft
            className="cursor-pointer"
            onClick={() => navigate(-1)}
          />{" "}
          Wishlist{" "}
        </h1>
      </div>

      <Container>
      {data.length > 0 ? (
          <div className="my-5"><div className="d-flex justify-content-between mb-5">
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
                onClick={() => navigate("/wishlist/")}
              >
                wishlist
              </Button>
            </div>
          </div><Row>{products}</Row></div>):
          (
            <div className="my-5">
          <h3>Empty Wishlist</h3>
          <Button
            className="shadow-none border-0 bg-dark rounded-0 mt-2"
            onClick={() => navigate("/shop")}
          >
            Go To Shop
          </Button>
        </div>) } </Container>
  </div>
  );
};

export default Wishlist;
