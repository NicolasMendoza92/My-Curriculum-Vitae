
// react-router-dom nos facilita tambien la navegacion sin recargar con el comp navLink, navlink nos da un indicio de que estamos parados en esa page o esa ruta
import { NavLink } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import {  BsEnvelopeFill, BsWhatsapp } from 'react-icons/bs'


export const NavbarRB = ({ user }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Nicolás Mendoza</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/mycv" >Work Experience</Nav.Link>
            <a href="https://wa.me/c/34644053023" target="blank"><BsWhatsapp className="contact-icon" /></a>
            <a href="nicomendoza.92@gmail.com" target="blank"><BsEnvelopeFill className="contact-icon" /></a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

