import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button, Container, ButtonGroup } from 'react-bootstrap';
import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Poke Pound</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/adopt">Adopt</Nav.Link>
            <Nav.Link href="/place">Rehome</Nav.Link>
          {Auth.loggedIn() ? (
            <>
            <Nav className="justify-content-end">
            <ButtonGroup>
              <Nav.Link href="/me">{Auth.getProfile().data.username}'s profile</Nav.Link>
              <Button variant="secondary" onClick={logout}>Log Out</Button>
            </ButtonGroup>
            </Nav>
            </>
          ) : (
            <>
            <Nav className="justify-content-end">
            <ButtonGroup>
              <Button variant="secondary" as={Link} to="/signup">Signup</Button>
              <Button variant="secondary" as={Link} to="/login">Login</Button>
            </ButtonGroup>
            </Nav>  
            </>
          )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
};

export default Header;
