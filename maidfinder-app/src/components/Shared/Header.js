import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";


class Header extends Component {
  render() {
    return (
      <div>
<Navbar
      collapseOnSelect
      expand="lg"
      bg="primary"
      variant="dark"
      fixed="top"
    ><Container>
    <Navbar.Brand href="/home">MaidFinder</Navbar.Brand>

      
  <Nav>
<div className="text-white">

      <Link className="text-white" to="/">Home</Link>
          &nbsp; | &nbsp;
            <Link className="text-white" to="/Profile">Profile</Link>
            &nbsp; | &nbsp;
            <Link className="text-white" to="/About">About</Link>
            &nbsp; | &nbsp;
            <Link className="text-white" to="/Signup">Signup</Link>

     
      </div>
     </Nav>
  </Container></Navbar>
    </div>
  );

  }
}
 
export default Header;