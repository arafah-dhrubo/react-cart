import React from "react";
import {Modal, Button, Row, Col} from "react-bootstrap";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {add, decrease, increase} from "../store/cartSlice";

const ProductModal = ({handleClose, show, product}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const data = useSelector((state) => state?.cart?.cartItems);

    const addToCart = (product) => {
        dispatch(add(product));
    };

    const increaseItem = (product) => {
        dispatch(increase(product));
    };

    const decreaseItem = (product) => {
        dispatch(decrease(product));
    };

    const item = data?.filter((item) => item.id == product.id)[0];
    return (
        <Modal
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    {product.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col xs={12} md={6}>
                        <img src={product?.image} alt={product?.title} className="w-100"/>
                    </Col>
                    <Col md={6} xs={12}>
                        <h1 className="fw-light fs-2 text-start">{product?.title}</h1>
                        <h1 className="text-start">${product?.price}</h1>
                        <p className="text-start text-justify">{product?.description}</p>
                        {item ? (
                            <div className="d-flex">
                                <Button
                                    className="rounded-0 bg-transparent border-dark shadow-none"
                                    onClick={() => increaseItem(product)}
                                >
                                    <AiOutlinePlus className=" text-dark fs-5"/>
                                </Button>
                                <p
                                    className="p-1 m-0 border border-dark text-center rounded-0 fs-5"
                                    style={{height: "40px", width: "40px"}}
                                >
                                    {item?.cartQuantity}
                                </p>
                                <Button
                                    className="rounded-0 bg-transparent border-dark shadow-none"
                                    onClick={() => decreaseItem(product)}
                                >
                                    <AiOutlineMinus className=" text-dark fs-5"/>
                                </Button>
                            </div>
                        ) : (
                            <div className="w-100 text-start">
                                <Button
                                    className="rounded-0 bg-dark border-0 shadow-none"
                                    onClick={() => addToCart(product)}
                                >
                                    Add To Cart
                                </Button>
                            </div>
                        )}
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button className="shadow-none border-0 bg-transparent text-dark" onClick={()=>handleClose()}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ProductModal;
