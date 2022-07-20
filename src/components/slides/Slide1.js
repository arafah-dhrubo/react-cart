import React from "react";
import img from "../../assets/slider/samsung.webp";
import { Container, Row, Col, Button } from "react-bootstrap";
import { SiSamsung } from "react-icons/si";
import { useNavigate } from "react-router-dom";
const Slide1 = () => {
  const navigate=useNavigate();
  return (
      <Container>
        <Row className="d-flex align-items-center apple"style={{"backgroundColor":"black", "borderRadius":"15px"}}>
          <Col md={6} sm={12} className="p-5 my-auto h-100 ">
            <div className="w-full text-start">
              <SiSamsung className="text-start text-white" style={{fontSize:"100px"}}/>
              <h1 className="text-start text-white ">Gear Up Gaming</h1>
              <h1 className="text-start text-white large-text ">
              Odyssey G9 
              </h1>
              <Button className="rounded-pill bg-transparent border-2 border-white mt-2 btn-lg" onClick={()=>navigate('/product/14')}>
                Shop Now
              </Button>
            </div>
          </Col>
          <Col md={6} sm={12} style={{"width":"400px"}}>
              {img ? (
                <img src={img} alt="iphone" className="w-100" />
              ) : (
                <div class="spinner-border" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              )}
      
          </Col>
        </Row>
      </Container>

  );
};

export default Slide1;
