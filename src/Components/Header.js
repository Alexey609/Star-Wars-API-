import React, { Component } from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import star from '../assets/star-wars.svg';

export default class Header extends Component {

    render() {
        return (
            <>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
            <Container>
             <Navbar.Brand href="/">
             <img src={star}
             height="30"
             width="30"
             className="d-inline-block align-top"
             alt="logo"
             /> 
             </Navbar.Brand> 
             <Navbar.Toggle aria-controls="responsitive-navbar-nav"/>
             <Navbar.Collapse id="responsitive-navbar-nav">
             <Nav className="mr-auto">
            <Nav.Link href="/">Главная</Nav.Link>
            <Nav.Link href="/stats">Статистика</Nav.Link>
            <Nav.Link href="/planets">Планеты</Nav.Link>
             </Nav>
             </Navbar.Collapse>
            </Container>
            </Navbar>
            </>
        );
    }
}