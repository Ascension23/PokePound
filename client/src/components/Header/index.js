import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">poke pound</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/adopt">Adopt</Nav.Link>
            <Nav.Link href="/place">Place Pokemon up for Adoption</Nav.Link>
          {Auth.loggedIn() ? (
            <>
              <Nav.Link href="/me">{Auth.getProfile().data.username}'s profile</Nav.Link>
              <Nav.Link onClick={logout}>Log Out</Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link href="/signup">Sign Up</Nav.Link>
              <Nav.Link href="login">Log In</Nav.Link>
            </>
          )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
};

export default Header;
