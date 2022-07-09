import React from "react";
import { useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const Search = ({ query }) => {
  const { data} = useSelector((state) => state.product);
  const result = data.filter((item)=>
        item.title.toString().toLowerCase().indexOf(query.toLowerCase()) > -1
      );

  const display = result.map((item) => (
    <Row key={item.id} className="mb-3">
      <Col md={2} className="text-center">
        <img src={item.image} alt={item.title} style={{ height: "50px" }} />
      </Col>
      <Col md={10}>
       <div className="text-start text-dark">
       <Link to={`/product/${item.id}`} className="text-decoration-none text-secondary">{item.title.slice(0,60)}...</Link>
       <br/>
       <small>${item.price}</small>
       </div>
      </Col>
    </Row>
  ));
  return (
    <div style={{"maxHeight":"264px"}} className={`${result.length===0 || result.length===data.length ? 'd-none':''} ${result.length>4 && "scroll-y"} position-absolute mt-3 bg-while shadow w-100 p-2 bg-white z-10`}>
      {query===""?"":result.length>0?<div>{display}</div>:<p className="text-center p-0 m-0">Unmatched</p>}
    </div>
  );
};

export default Search;
