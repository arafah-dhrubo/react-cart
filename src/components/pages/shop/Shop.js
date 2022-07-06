import { useDispatch, useSelector } from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom'
import { add } from '../../store/cartSlice';

import Product from '../featured/Product';
import { Row, Container, Button } from 'react-bootstrap';
import { BsArrowLeft } from 'react-icons/bs';

const Shop = () => {
    const { category } = useParams();
    const dispatch = useDispatch();
    const { data, status } = useSelector(state => state.product)

    const navigate = useNavigate()

    const filter = data.filter(product => product.category === category);
    const handleCart = product => {
        dispatch(add(product));
    }

    const products = filter.map(product => <Product key={product.id} product={product} handleCart={handleCart} />);
    return (
        <div>
            <div className='bg-dark bg-gradient py-5'><h1 className='text-uppercase text-white'><BsArrowLeft className="cursor-pointer" onClick={() => navigate(-1)} /> {category}</h1></div>
            <div className='py-5'>
                <Container>
                   <div className="d-flex justify-content-between mb-5">
                       <div className="d-flex align-items-center">
                           <Button className="shadow-none border-0 bg-transparent text-dark" onClick={()=>navigate('/')}>home</Button> /
                           <Button className="shadow-none border-0 bg-transparent text-dark" onClick={()=>navigate('/shop')}>shop</Button> /
                           <Button className="shadow-none border-0 bg-transparent text-dark" onClick={()=>navigate(`/shop/${category}`)}>{category}</Button>
                       </div>
                   </div>
                    <Row>
                        {products}
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Shop