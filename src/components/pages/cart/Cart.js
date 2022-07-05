import React from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../../store/cartSlice';
import {useNavigate} from 'react-router-dom'
import { IoTrashBinOutline } from 'react-icons/io5'

const Cart = () => {
    const data = useSelector(state => state.cart)
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const handleRemove=(product)=>{
        dispatch(remove(product))
    }
    const products = data.map(item => <Row className='d-flex align-items-center border-bottom-1'>
            <Col md={1} className='border-0'><Button className="shadow-none bg-transparent text-dark border-0" onClick={()=>handleRemove(item.id)}><IoTrashBinOutline /></Button></Col>
            <Col md={4} className='text-start border-0 d-flex'>
                <img src={item.image} style={{"width":"50px"}}/>
                <Button onClick={()=>navigate(`/product/${item.id}`)} className="shadow-none bg-transparent text-dark border-0">{item.title.slice(0,25)}</Button>
            </Col>
        </Row>
    )

    return (
        <Container>
            <Table>
                <thead>
                    <Row>
                        <Col md={2}>Remove</Col>
                        <Col md={4}>Product</Col>
                        <Col md={2}>Price</Col>
                        <Col md={2}>Quantity</Col>
                        <Col md={2}>Subtotal</Col>
                    </Row>
                </thead>
                <tbody>
                    {products}
                </tbody>
            </Table>
        </Container>
    )
}

export default Cart