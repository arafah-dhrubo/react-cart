import React from "react";
import img from "../../assets/slider/ssd.webp";
import { Container, Row, Col, Button } from "react-bootstrap";
import { SiSamsung } from "react-icons/si";
import { useNavigate } from "react-router-dom";
const Slide2 = () => {
  const navigate=useNavigate();
  return (
      <Container>
        <Row className="d-flex py-5 align-items-center apple"style={{"backgroundColor":"black", "borderRadius":"15px"}}>
          <Col md={6} sm={12} className="p-5 my-auto h-100 ">
            <div className="w-full text-start">
              <SiSamsung className="text-start text-white" style={{fontSize:"100px"}}/>
              <h1 className="text-start text-white ">Unreal Performance</h1>
              <h1 className="text-start text-white large-text">
              Samsung SSD
              </h1>
              <Button className="rounded-pill bg-transparent border-2 border-white mt-2 btn-lg"  onClick={()=>navigate('/product/11')}>
                Shop Now
              </Button>
            </div>
          </Col>
          <Col md={6} sm={12}>
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

export default Slide2;
