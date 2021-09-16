import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Button, Container, Nav, ButtonGroup } from 'react-bootstrap';
import Auth from '../../utils/auth';
import Image from 'react-bootstrap/Image'

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <Navbar bg="light" expand="lg" id="secFont">
    <Container>
      <Navbar.Brand href="/" className="mx-3">
      <Image
        src="../poketalk.png"
        width="140"
        height="70"
        className=" "
        alt="Poke Talk logo"
      />
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          {/* <Nav.Link href="/">Home</Nav.Link> */}
          <Nav.Link href="/adopt" style={{fontSize:"18px"}} >Community Discussion</Nav.Link>
          <Nav.Link href="/place" style={{fontSize:"18px"}}>Add a Pokémon</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    

{/* login/signup buttons */}

         {Auth.loggedIn() ? (
          <>
          <Nav className="justify-content-end">
          <ButtonGroup className="justify-content-end">
            <Button variant="danger" href="/me" id="fonts">{Auth.getProfile().data.username}'s profile</Button>
            <Button variant="secondary" onClick={logout} id="fonts">Log Out</Button>
          </ButtonGroup>
          </Nav>
          </>
        ) : (
          <> 
           <Nav className="justify-content-end">
          <ButtonGroup className="justify-content-end">
            <Button variant="danger" as={Link} to="/signup" id="fonts">Signup</Button>
            <Button variant="secondary" as={Link} to="/login" id="fonts">Login</Button>
          </ButtonGroup>
          </Nav>   
           </> 
         )} 
    </Container>  
  </Navbar>
  );
};

export default Header;