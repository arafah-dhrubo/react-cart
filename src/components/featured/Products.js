import React, { useEffect, useState } from 'react'
import { Container, Button, Card, Row, Col } from 'react-bootstrap'
const Products = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => setData(data))
        setLoading(false);
    }, []);

    const products = data.map(product =>
            <Col xs={6} md={2}>
                <Card className='mb-4 border-0'>
                    <div className='p-2' style={{'width':'100%', 'height':'175px'}}>
                    <Card.Img variant="top" src={product.image} style={{'height':'100%'}}/>
                    </div>
                    <Card.Body>
                        <Card.Title className='fs-6 fw-normal'>{product.title.slice(0, 25)}</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
    )
    console.log(data)
    return (
        <div className='py-5'>
            <Container>
                <h2 className='fw-semibold'>Featured Products</h2>
                <div className='my-2'>
                    <Button variant="transparent category rounded-0">All</Button>
                    <Button variant="transparent category rounded-0">Electronics</Button>
                    <Button variant="transparent category rounded-0">Jewelery</Button>
                    <Button variant="transparent category rounded-0">Men's</Button>
                    <Button variant="transparent category rounded-0">Women's</Button>
                </div>
                <Row>
                    {products}
                </Row>
            </Container>
        </div>
    )
}

export default Products