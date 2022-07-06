import React from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { remove, increase, decrease } from '../../store/cartSlice';
import {useNavigate} from 'react-router-dom'
import { IoTrashBinOutline } from 'react-icons/io5'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
const Cart = () => {
    const data = useSelector(state => state.cart.cartItems)
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const handleRemove=(product)=>{
        dispatch(remove(product))
    }

    const increaseItem=(product)=>{
        dispatch(increase(product))
    }

    const decreaseItem=(product)=>{
        dispatch(decrease(product))
    }
    const products = data.map(item => <Row className='d-flex align-items-center border-bottom border-1' key={item.id}>
            <Col md={2} className='border-0'><Button className="shadow-none bg-transparent text-dark border-0" onClick={()=>handleRemove(item.id)}><IoTrashBinOutline /></Button></Col>
            <Col md={4} className='text-start border-0 d-flex'>
                <img src={item.image} style={{"width":"50px"}}/>
                <Button onClick={()=>navigate(`/product/${item.id}`)} className="shadow-none bg-transparent text-dark border-0">{item.title.slice(0,25)}</Button>
            </Col>
            <Col md={2} className='border-0'>${parseInt(item.price)}</Col>
            <Col md={2} className='border-0 d-flex'>
            <Button className="rounded-0 bg-transparent border-dark shadow-none"><AiOutlinePlus className=' text-dark fs-5' onClick={()=>increaseItem(item)}/></Button>
                <p className='p-1 m-0 border border-dark rounded-0 fs-5' style={{ "height": "40px", "width": "40px" }}>{item.cartQuantity}</p>
                <Button className="rounded-0 bg-transparent border-dark shadow-none"><AiOutlineMinus className=' text-dark fs-5' onClick={()=>decreaseItem(item)}/></Button>
                </Col>
            <Col md={2} className='border-0'>${parseInt(item.price)*parseInt(item.cartQuantity)}</Col>
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