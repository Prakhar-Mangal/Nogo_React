import React from 'react'
import { Router, Link, navigate } from "@reach/router";
import { Nav, Navbar, Button, Form, FormControl } from 'react-bootstrap'

export default function NavBar(props) {

    console.log(props)

    return (

        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">

                <Navbar.Brand><img
                    src="https://nogozo.com/static/mainapp/img/logo.png"
                    width="100"
                    height="50"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                /></Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto" >
                        <Nav.Link href="#" onClick={() => { navigate('/') }}>Home</Nav.Link>
                        <Nav.Link href="#orders" onClick={() => { navigate('/orders') }}>Orders</Nav.Link>
                        <Nav.Link href="#profile" onClick={() => { navigate('/profile') }}>Profile</Nav.Link>
                        <Nav.Link href="#contactus" onClick={() => { navigate('/contactus') }}>Contact</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>

        </div>
    )
}
