import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import { FaSearch } from "react-icons/fa";
import { BsBasket3Fill } from "react-icons/bs";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Header = () => {

  return (
    <div>
      <Navbar expand="md" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">MoBoom</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Store">Store</Nav.Link>
            <Nav.Link href="#Account">Account</Nav.Link>
            <Nav.Link href="#Wishlist">Wishlist</Nav.Link>
            <Nav.Link href="#Basket">Basket <BsBasket3Fill/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header

