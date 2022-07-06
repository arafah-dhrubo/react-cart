import React, {useState} from 'react'
import {Button, Card, Col} from 'react-bootstrap'
import {AiOutlineHeart} from 'react-icons/ai'
import {TbArrowsCross} from 'react-icons/tb'
import {AiOutlineEye} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import ProductModal from "../../utils/ProductModal";


const Product = ({product, handleCart}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Col xs={6} md={2}>
            <ProductModal handleClose={handleClose} show={show} product={product}/>
            <Card className='mb-4 border-0 product'>
                <div className='p-2' style={{'width': 'auto', 'height': '175px'}}>
                    <Card.Img variant="top" src={product.image} style={{'height': '100%'}}/>
                    <div style={{"width": "40px", "height": "42%"}}
                         className="position-absolute top-0 bg-secondary product-button">
                        <Button className='p-2 mb-2 bg-transparent border-0 shadow-none'
                                onClick={handleShow}><AiOutlineEye className='fs-5'/></Button>
                        <Button className='p-2 mb-2 bg-transparent border-0 shadow-none'><AiOutlineHeart
                            className='fs-5'/></Button>
                        <Button className='p-2 bg-transparent border-0 shadow-none'><TbArrowsCross
                            className='fs-5'/></Button>
                    </div>
                </div>
                <Card.Body>
                    <Card.Title className='fs-6 fw-normal'><Link to={`/product/${product.id}`}
                                                                 className='text-decoration-none link'>{product.title.slice(0, 25)}</Link></Card.Title>
                    <Card.Text className='text-secondary'>${product.price}</Card.Text>
                    <div className='bg-dark position-absoulte cart-button'>
                        <Button className='shadow-none bg-transparent border-0' onClick={() => handleCart(product)}>Add
                            To Cart</Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Product