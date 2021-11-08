import React from "react";
import './Navbar.css'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

export default props => {
  return (
    <div>
      <Navbar bg="primary" variant="dark" fixed="top" className="navbar">
        <Navbar.Brand href="#home">SocialMedia - Feed</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Sign up</Nav.Link>
          <Nav.Link href="#pricing">Sign in</Nav.Link>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
    </div>
  )
}