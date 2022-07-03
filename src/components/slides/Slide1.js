import React from 'react'
import img from '../../assets/slider/iphone.png';
import { Container, Row, Col, Button } from 'react-bootstrap'
import { BsApple } from 'react-icons/bs'
const Slide1 = () => {

    return (
        <div className='bg-dark bg-gradient'>
            <Container className='my-auto d-flex align-items-center apple'>
            <Row>
                <Col md={6} sm={12} className="p-5 my-auto h-100 ">
                    <div className='w-full text-start'>
                        <BsApple className='text-start fs-2 text-white' />
                        <h1 className='text-start text-white '>Introducing</h1>
                        <h1 className='text-start text-white large-text '>iPhone 12 Pro</h1>
                        <Button className='rounded-0 bg-transparent border-2 border-white mt-2 '>Shop Now</Button>
                    </div>
                </Col>
                <Col md={6} sm={12}>
                   <div className='my-auto bg-light rounded-circle p-1 m-5'>
                   <img src={img} alt="iphone" className='w-100' />
                   </div>
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default Slide1