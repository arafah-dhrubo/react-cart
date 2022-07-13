import React from 'react'
import Products from '../featured/Products'
import Category from './Category'
import Features from './Features'
import Slider from './Slider'

const Home = () => {
  return (
    <div>
        <Slider/>
        <Category/>
        <Products/>
        <Features/>
    </div>
  )
}

export default Home