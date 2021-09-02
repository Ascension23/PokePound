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
    // <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
    //   <div className="container flex-row justify-space-between-lg justify-center align-center">
    //     <div>
    //       <Link className="text-light" to="/">
    //         <h1 className="m-0">Tech Thoughts</h1>
    //       </Link>
    //       <p className="m-0">Get into the mind of a programmer.</p>
    //     </div>

    //     <div>
    //       {Auth.loggedIn() ? (
    //         <>
    //           <Link className="btn btn-lg btn-info m-2" to="/me">
    //             {Auth.getProfile().data.username}'s profile
    //           </Link>
    //           <button className="btn btn-lg btn-light m-2" onClick={logout}>
    //             Logout
    //           </button>
    //         </>
    //       ) : (
    //         <>
    //           <Link className="btn btn-lg btn-info m-2" to="/login">
    //             Login
    //           </Link>
    //           <Link className="btn btn-lg btn-light m-2" to="/signup">
    //             Signup
    //           </Link>
    //         </>
    //       )}
    //     </div>

    //   </div>
    // </header>


    <Nav className="justify-content-end" activeKey="/home">
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/adopt">Adopt</Nav.Link>
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
