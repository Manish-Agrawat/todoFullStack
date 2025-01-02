import React from "react";
import {
  Navbar,
  Nav,
  Button,
  Container,
  Form,
  NavDropdown,
} from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../style/Header.css";
import toast, { useToaster } from "react-hot-toast";
import axios from "axios";
const Header = () => {
  // Custom Navbar Component
  const loction = useLocation();
  const navigate = useNavigate();

  // logout route handel

  async function logout() {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/users/logout",
        {
          withCredentials: true,
        }
      );
     

      if (response.data.success) {
        toast.success("Logged Out Successfully!");
        navigate("/");
      }
    } catch (error) {
      toast.error("Failed to logout");
      console.log(error);
    }
  }
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container fluid>
        {/* Logo with Text */}
        <Navbar.Brand as={Link} to="/">
          <img
            src="./Todo List.png" // Replace with your logo URL
            alt="Logo"
          />
          <span>To-Do-List</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          {/* Navigation Links */}
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            {loction.pathname === "/" && (
              <NavDropdown title="Sign Up/Sign In" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="/login">
                  Login
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/register">
                  Register
                </NavDropdown.Item>
              </NavDropdown>
            )}

            {loction.pathname === "/create" && (
              <Nav.Link as={Link} onClick={logout}>
                Logout
              </Nav.Link>
            )}
          </Nav>

          {/* Search Form */}
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
