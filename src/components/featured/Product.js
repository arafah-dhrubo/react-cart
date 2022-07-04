import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { AiOutlineHeart } from 'react-icons/ai'
import { TbArrowsCross } from 'react-icons/tb'
import { FiShoppingBag } from 'react-icons/fi'
import {Link} from 'react-router-dom'
const Product = ({product, handleCart}) => {
  return (
    <Col xs={6} md={2}>
    <Card className='mb-4 border-0 product'>
        <div className='p-2' style={{ 'width': 'auto', 'height': '175px' }}>
            <Card.Img variant="top" src={product.image} style={{ 'height': '100%' }} />
            <div style={{ "width": "40px", "height": "42%" }} className="position-absolute top-0 bg-secondary product-button">
                <Button className='p-2 mb-2 bg-transparent border-0 shadow-none'><FiShoppingBag className='fs-5' /></Button>
                <Button className='p-2 mb-2 bg-transparent border-0 shadow-none'><AiOutlineHeart className='fs-5' /></Button>
                <Button className='p-2 bg-transparent border-0 shadow-none'><TbArrowsCross className='fs-5' /></Button>
            </div>
        </div>
        <Card.Body>
            <Card.Title className='fs-6 fw-normal'><Link to={`/product/${product.id}`} className='text-decoration-none link'>{product.title.slice(0, 25)}</Link></Card.Title>
            <Card.Text className='text-secondary'>${product.price}</Card.Text>
            <div className='bg-dark position-absoulte cart-button'>
                <Button className='shadow-none bg-transparent border-0' onClick={()=>handleCart(product)}>Add To Cart</Button>
                </div>
        </Card.Body>
    </Card>
</Col>
  )
}

export default Product