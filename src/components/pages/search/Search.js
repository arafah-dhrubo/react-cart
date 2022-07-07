import React, {useState} from 'react'
import {useSelector} from 'react-redux'
const Search = ({query}) => {
    const {data} = useSelector(state=>state.product);
    const [products, setProducts] = useState([]);
    const result = data.map(item=>item.name)
  return (
    <div className="position-absolute mt-3 bg-while shadow w-100 p-2">hi</div>
  )
}

export default Search