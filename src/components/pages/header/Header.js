import React, { useState } from "react";
import {
  Container,
  Navbar,
  NavDropdown,
  Nav,
  Form,
  Stack,
  Button,
  Badge,
} from "react-bootstrap";
import { SiKasasmart } from "react-icons/si";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import { TbArrowsCross } from "react-icons/tb";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import Search from "../search/Search";
const Header = () => {
  const items = useSelector((state) => state.cart.cartItems);
  const compareItems = useSelector((state) => state.compare.compareItems);
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  return (
    <div className="navbar-fixed-top" id="navbar_top">
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand
            onClick={() => navigate("/")}
            className="d-flex cursor-pointer justify-content-end"
          >
            <SiKasasmart className="fs-2" />
            <h2 className="m-0 p-0">Mart</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="mx-auto text-start w-100 d-flex align-items-center d-grid gap-3">
              {/* category  */}
              <NavDropdown
                title="Category"
                id="nav-dropdown-dark-example"
                menuVariant="dark"
              >
                <NavDropdown.Item>
                  <Button
                    className="bg-transparent text-white border-0 ps-0"
                    onClick={() => navigate("/shop/jewelery")}
                  >
                    Jewelery
                  </Button>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Button
                    className="bg-transparent text-white border-0 ps-0"
                    onClick={() => navigate("/shop/electronics")}
                  >
                    Electronics
                  </Button>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Button
                    className="bg-transparent text-white border-0 ps-0"
                    onClick={() => navigate("/shop/men's%20clothing")}
                  >
                    For Men's
                  </Button>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Button
                    className="bg-transparent text-white border-0 ps-0"
                    onClick={() => navigate("/shop/women's%20clothing")}
                  >
                    For Women's
                  </Button>
                </NavDropdown.Item>
              </NavDropdown>

              {/* search  */}
              <div className="w-100 position-relative">
                <Stack
                  direction="horizontal"
                  gap={3}
                  className="bg-white p-0 m-0 w-100 "
                >
                  <Form.Control
                    className="me-auto border-0 focus-0"
                    placeholder="Add your item here..."
                    onChange={(e) => setQuery(e.target.value)}
                  />
                  <div className="bg-light h-100">
                    <Button className="bg-transparent border-0 shadow-none">
                      <FiSearch className="text-dark fs-3" />
                    </Button>
                  </div>
                </Stack>
                <Search query={query} />
              </div>

              {/* cart  */}
              <Button
                onClick={() => navigate("/cart")}
                variant="transparent position-relative text-start p-0 shadow-none "
              >
                <FiShoppingBag className="text-white fs-4" />{" "}
                {items?.length ? (
                  <Badge
                    bg="dark"
                    className="position-absolute bg-white text-dark rounded rounded-circle p-1 end-0 top-0"
                    style={{ width: "20px", height: "20px" }}
                  >
                    {items?.length}
                  </Badge>
                ) : (
                  ""
                )}
              </Button>

              {/* wishlist  */}
              <Button
                onClick={() => navigate("/compare")}
                variant="transparent position-relative text-start p-0 shadow-none "
              >
                <AiOutlineHeart className="text-white fs-4" />{" "}
                {compareItems?.length ? (
                  <Badge
                    bg="dark"
                    className="position-absolute bg-white text-dark rounded rounded-circle p-1 end-0 top-0"
                    style={{ width: "20px", height: "20px" }}
                  >
                    {}
                  </Badge>
                ) : (
                  ""
                )}
              </Button>

              {/* compare  */}
              <Button
                onClick={() => navigate("/compare")}
                variant="transparent position-relative text-start p-0 shadow-none "
              >
                <TbArrowsCross className="text-white fs-4" />
                {compareItems?.length ? (
                  <Badge
                    bg="dark"
                    className="position-absolute bg-white text-dark rounded rounded-circle p-1 end-0 top-0"
                    style={{ width: "20px", height: "20px" }}
                  >
                    {compareItems?.length}
                  </Badge>
                ) : (
                  ""
                )}
              </Button>

              {/* profile  */}
              <NavDropdown
                title={<CgProfile className="fs-4 text-white" />}
                id="nav-dropdown-dark-example"
                menuVariant="dark"
              >
                <NavDropdown.Item>
                  <Link
                    to="/profile"
                    className="text-decoration-none text-white"
                  >
                    Profile
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/login" className="text-decoration-none text-white">
                    Login
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    to="/register"
                    className="text-decoration-none text-white"
                  >
                    Register
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item to="logout">
                  <Link
                    to="/logout"
                    className="text-decoration-none text-white"
                  >
                    Logout
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      document.getElementById("navbar_top").classList.add("fixed-top");
      // add padding top to show content behind navbar
      const navbar_height = document.querySelector(".navbar").offsetHeight;
      document.body.style.paddingTop = navbar_height + "px";
    } else {
      document.getElementById("navbar_top").classList.remove("fixed-top");
      // remove padding top from body
      document.body.style.paddingTop = "0";
    }
  });
});

export default Header;
