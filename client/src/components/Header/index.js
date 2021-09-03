import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Button } from 'react-bootstrap';
import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (

    <Nav className="justify-content-end" activeKey="/home">
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/place">Place Pokemon up for Adoption</Nav.Link>
      </Nav.Item>

        {Auth.loggedIn() ? (
          <>
            <Nav.Item>
              <Nav.Link href="/me">{Auth.getProfile().data.username}'s profile</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={logout}>Log Out</Nav.Link>
            </Nav.Item>
            {/* <Button variant="secondary" onClick={logout}>
              Logout
            </Button> */}
          </>
        ) : (
          <>
            <Nav.Item>
              <Nav.Link href="/signup">Sign Up</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="login">Log In</Nav.Link>
            </Nav.Item>
          </>
        )}
    </Nav>
  );
};

export default Header;
