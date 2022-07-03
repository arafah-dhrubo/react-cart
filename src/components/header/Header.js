import React from 'react'
import { Container, Navbar, NavDropdown, Nav, Form, Stack, Button, Badge } from 'react-bootstrap'
import { SiKasasmart } from 'react-icons/si'
import { FiSearch, FiShoppingBag } from 'react-icons/fi'
import { CgProfile } from 'react-icons/cg'
import { AiOutlineHeart } from 'react-icons/ai'
import { TbArrowsCross } from 'react-icons/tb'

const Header = () => {
  return (
    <div className='navbar-fixed-top' id="navbar_top" >
      <Navbar bg="dark" expand="lg" variant='dark'>
        <Container>
          <Navbar.Brand href="#home" className='d-flex justify-content-end'><SiKasasmart className='fs-2' /><h2 className='m-0 p-0'>Mart</h2></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="mx-auto text-start w-100 d-flex align-items-center d-grid gap-2">
              {/* category  */}
              <NavDropdown title="Category" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>

              {/* search  */}
              <Stack direction="horizontal" gap={3} className="bg-white p-0 m-0 w-100 ">
                <Form.Control className="me-auto border-0 focus-0" placeholder="Add your item here..." />
                <div className='bg-light h-100'>
                  <Button className='bg-transparent border-0'><FiSearch className='text-dark fs-3' /></Button>
                </div>
              </Stack>

              {/* cart  */}
              <Button variant="transparent position-relative text-start p-0">
                <FiShoppingBag className='text-white fs-2' /> <Badge bg="dark" className='position-absolute bg-white text-dark rounded rounded-circle end-0'>9</Badge>
              </Button>

              {/* wishlist  */}
              <Button variant="transparent text-start p-0">
                <AiOutlineHeart className='text-white fs-2' />
              </Button>

              {/* compare  */}
              <Button variant="transparent text-start p-0">
                <TbArrowsCross className='text-white fs-2' />
              </Button>

              {/* profile  */}
              <NavDropdown title={<CgProfile className='fs-2 text-white' />} id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      document.getElementById('navbar_top').classList.add('fixed-top');
      // add padding top to show content behind navbar
      const navbar_height = document.querySelector('.navbar').offsetHeight;
      document.body.style.paddingTop = navbar_height + 'px';
    } else {
      document.getElementById('navbar_top').classList.remove('fixed-top');
      // remove padding top from body
      document.body.style.paddingTop = '0';
    }
  });
});

export default Header