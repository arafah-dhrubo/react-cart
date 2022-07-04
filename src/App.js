import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home/Home';
import ScrollToTop from 'react-scroll-to-top';
import {AiOutlineArrowUp} from 'react-icons/ai'
import Product from './components/product/Product';
import store from './components/store/store';
import { Provider } from 'react-redux';
import Cart from './components/cart/Cart';

function App() {
  return (
    <div className="App position-relative">
    <Provider store={store}>
    <BrowserRouter>
        <Header />
        <ScrollToTop smooth component={<AiOutlineArrowUp className='fs-4'/>} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </Provider>
    </div>
  );
}

export default App;
