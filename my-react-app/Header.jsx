import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ESTD2009 from '../Images/ESTD2009.png';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: '#f8e808', color: 'black' }}>
      <Container>
        <Navbar.Brand href="/">
          <img 
            className="mx-auto h-14 w-auto rounded-full"
            src={ESTD2009}
            alt="TAPROBANA TAXI"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />  {/* Toggle button for mobile responsiveness */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-center">
            <Nav.Link href="/" className='navitems px-3' style={{ color: 'black', fontWeight: 'bold' }}>Home</Nav.Link>
            <Nav.Link href="/contact" className='navitems px-3' style={{ color: 'black', fontWeight: 'bold' }}>Contact Us</Nav.Link>
            <Nav.Link href="/about" className='navitems px-2' style={{ color: 'black', fontWeight: 'bold' }}>About</Nav.Link>
            <Nav.Link href="/tours" className='navitems px-3' style={{ color: 'black', fontWeight: 'bold' }}>Tours</Nav.Link>
            <Nav.Link href="/stay" className='navitems px-3' style={{ color: 'black', fontWeight: 'bold' }}>Stay Home</Nav.Link>
            <Nav.Link href="/fleet" className='navitems px-3' style={{ color: 'black', fontWeight: 'bold' }}>Choose Your Fleet</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/login" className='navitems px-3' style={{ color: 'black', fontWeight: 'bold' }}>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
