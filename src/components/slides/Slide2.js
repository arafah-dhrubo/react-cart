import React from 'react'
import img from '../../assets/slider/watch.png';
import { Container, Row, Col, Button } from 'react-bootstrap'
import { BsApple } from 'react-icons/bs'
const Slide2 = () => {

    return (
        <div className='bg-dark bg-gradient'>
            <Container className='my-auto d-flex align-items-center apple'>
            <Row>
                <Col md={6} sm={12} className="p-5 my-auto">
                    <div className='w-full text-start'>
                        <BsApple className='text-start fs-2 text-white' />

                        <h4 className='text-start text-white mt-4'>Track your fitness</h4>
                        <h1 className='text-start text-white large-text'>Apple Watch Series 7</h1>
                        <Button className='rounded-0 bg-transparent border-2 border-white mt-2'>Shop Now</Button>
                    </div>
                </Col>
                <Col md={6} sm={12}>
                    <div className='bg-white rounded-circle p-1 m-5'>
                    <img src={img} alt="iphone" className='w-100' />
                    </div>
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default Slide2