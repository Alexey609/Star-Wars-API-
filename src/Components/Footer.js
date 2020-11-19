import React, { Component } from 'react';
import { Navbar, Container } from "react-bootstrap";
import star from '../assets/star-wars.svg';

export default class Footer extends Component {
 render() {
     return (
      <>
       <Navbar collapseOnSelect expand="md" bg="dark" variant="fixed-bottom">
            <Container>
             <Navbar.Brand href="/">
             <img src={star}
             height="30"
             width="30"
             className="d-inline-block align-top"
             alt="logo"
             /> 
             </Navbar.Brand> 
            </Container>
            </Navbar>
      </>
     );
 }
}