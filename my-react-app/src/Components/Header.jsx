import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Taprobana from '../Images/Taprobana.png';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: '#1bbd61', color: 'black' }}>
      <Container>
        <Navbar.Brand href="/">
          <img 
            className="mx-auto h-14 w-auto rounded-full"
            src={Taprobana}
            alt="TAPROBANA TAXI"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />  {/* Toggle button for mobile responsiveness */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-center">
            <Nav.Link href="/" className='navitems px-3' style={{ color: 'black', fontWeight: 'bold' }}>Home</Nav.Link>
            <Nav.Link href="/contact" className='navitems px-3' style={{ color: 'black', fontWeight: 'bold' }}>Contact Us</Nav.Link>
            <Nav.Link href="/about" className='navitems px-2' style={{ color: 'black', fontWeight: 'bold' }}>About</Nav.Link>
            <Nav.Link href="/spice" className='navitems px-3' style={{ color: 'black', fontWeight: 'bold' }}>Spice</Nav.Link>
            <Nav.Link href="/herb" className='navitems px-3' style={{ color: 'black', fontWeight: 'bold' }}>Herbs</Nav.Link>
            <Nav.Link href="/teas" className='navitems px-3' style={{ color: 'black', fontWeight: 'bold' }}>Teas</Nav.Link>
            <Nav.Link href="/stay" className='navitems px-3' style={{ color: 'black', fontWeight: 'bold' }}>Stay Home</Nav.Link>
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
