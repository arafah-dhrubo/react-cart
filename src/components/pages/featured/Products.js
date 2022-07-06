import React, { useEffect, useState } from 'react'
import { Container, Button, Row } from 'react-bootstrap'
import SkeletonProduct from '../../skeletons/SkeletonProduct';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../../store/cartSlice';
import { fetchProducts, STATUSES } from '../../store/productSlice';

import Product from './Product'

const Products = () => {
    const dispatch = useDispatch();
    const { data:data, status } = useSelector(state => state.product)
    const [filter, setFilter] = useState(data);


    useEffect(() => {
        dispatch(fetchProducts())
        // setLoading(true);
        // fetch(`https://fakestoreapi.com/products/`)
        //     .then(res => res.json())
        //     .then(data => {setData(data); setLoading(false); setFilter(data)})
        setFilter(data)
    }, []);


    const handleCart = product => {
        dispatch(add(product));
    }

    const skeleton = [1, 2, 3, 4, 5, 6].map(loading => (
        <div className="col-2" key={loading}>
            <SkeletonProduct />
        </div>
    ))

    const products = filter.map(product => <Product key={product.id} product={product} handleCart={handleCart}/>)
    const filterProducts = category => {
        if (category === "") {
            setFilter(data)
        }
        else {
            const updatedList = data.filter(item => item.category === category);
            setFilter(updatedList)
        }
    }

    return (
        <div className='py-5'>

            <Container>
                <h2 className='fw-semibold'>Featured Products</h2>
                <div className='my-2 mb-5'>
                    <Button variant="transparent category rounded-0 shadow-none" onClick={() => filterProducts("")}>All</Button>
                    <Button variant="transparent category rounded-0 shadow-none" onClick={() => {
                        filterProducts("electronics")
                    }}>Electronics</Button>
                    <Button variant="transparent category rounded-0 shadow-none" onClick={() => filterProducts("jewelery")}>Jewelery</Button>
                    <Button variant="transparent category rounded-0 shadow-none" onClick={() => filterProducts("men's clothing")}>Men's</Button>
                    <Button variant="transparent category rounded-0 shadow-none" onClick={() => filterProducts("women's clothing")}>Women's</Button>
                </div>
                <Row>
                    {products}
                </Row>
            </Container>
        </div>
    )
}

export default Products