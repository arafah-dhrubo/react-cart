import React from "react";
import { Container } from "react-bootstrap";
import { MdDoNotDisturbAlt } from "react-icons/md";
import {useParams} from "react-router-dom";
const NotFound = () => {
    const param = useParams();
  return (
    <Container className="d-flex flex-column align-items-center justify-content-center" style={{"height":"400px"}}>
        <p>Looking for <strong>{param}</strong>?</p>
      <MdDoNotDisturbAlt className="fs-1"/>
      <h1>404 Not Found</h1>
    </Container>
  );
};

export default NotFound;
