import logo from './logo.svg';
import './App.css';
import Header from './components/pages/header/Header';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/pages/home/Home';
import ScrollToTop from 'react-scroll-to-top';
import {AiOutlineArrowUp} from 'react-icons/ai'
import Product from './components/pages/product/Product';
import store from './components/store/store';
import {Provider} from 'react-redux';
import Cart from './components/pages/cart/Cart';
import Compare from './components/pages/compare/Compare';
import Shop from './components/pages/shop/Shop';
import AllProduct from "./components/pages/shop/AllProduct";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
    return (
        <div className="App position-relative">
            <Provider store={store}>
                <BrowserRouter>
                    <Header/>
                    <ScrollToTop smooth component={<AiOutlineArrowUp className='fs-4'/>}/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/cart" element={<Cart/>}/>
                        <Route path="/compare" element={<Compare/>}/>
                        <Route path="/product/:id" element={<Product/>}/>
                        <Route path="/shop/:category" element={<Shop/>}/>
                        <Route path="/shop/" element={<AllProduct/>}/>
                    </Routes>
                </BrowserRouter>
                <ToastContainer />
            </Provider>
        </div>
    );
}

export default App;
