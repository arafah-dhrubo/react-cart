import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import { AiOutlineHeart, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { TbArrowsCross } from 'react-icons/tb'
import StarRatings from 'react-star-ratings';
import SkeletonProduct from '../../skeletons/SkeletonProduct';
const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(json => { setProduct(json); setLoading(false) })
    }, [id])

    const productDetail = <Row className='mt-5'>
        <Col md={6} sx={12}>
            <img src={product?.image} className="" style={{ "height": "300px" }} />
        </Col>
        <Col md={6} sx={12}>
            <h1 className='fw-light fs-2 text-start'>{product?.title}</h1>
            <h1 className="text-start">${product?.price}</h1>
            <p className='text-start text-justify'>{product?.description}</p>
            <div className='d-flex'>
                <Button className="rounded-0 bg-transparent border-dark shadow-none"><AiOutlinePlus className=' text-dark fs-5' /></Button>
                <p className='p-1 m-0 border border-dark rounded-0 fs-5' style={{ "height": "40px", "width": "40px" }}>2</p>
                <Button className="rounded-0 bg-transparent border-dark shadow-none"><AiOutlineMinus className=' text-dark fs-5' /></Button>
            </div>
            <div className="d-flex align-items-center mt-3">
                <Button className='bg-transparent shadow-none border-0 text-dark'><AiOutlineHeart /> Add to wishlist</Button>
                <p className='m-0 p-0'>|</p>
                <Button className='bg-transparent shadow-none border-0 text-dark'><TbArrowsCross /> Compare</Button>
            </div>
            <hr />
            <div className="d-flex align-items-center justify-content-between">
                <span className='text-start'>Category: {product?.category}</span>
                {product && <span>({product?.rating?.count}) Ratings: <StarRatings
                    rating={Math.round(product?.rating?.rate)}
                    starDimension="20px"
                    starSpacing="5px"
                    numberOfStars={5}
                    starRatedColor="black"
                /></span>}
            </div>
        </Col>
    </Row>


    return (
        <Container>
            {loading ? <SkeletonProduct /> : productDetail}
        </Container>
    )
}

export default Product