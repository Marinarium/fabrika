import React, {Component} from 'react'
import {Button, Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from "reactstrap";


class NavigationContainer extends Component {

    render() {
        return (
            <React.Fragment>
                <Navbar color="light" light expand="md">
                    <NavbarBrand className="mr-5" href="/">
                        <b>fabrika</b>
                    </NavbarBrand>
                    <NavbarToggler/>
                    <Collapse navbar>
                        <Nav className="mr-auto ml-5" navbar>
                            <NavItem>
                                <NavLink className="mr-5" href="/about">
                                    Platform
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="mr-5" href="#">
                                    Capabilities
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="mr-5" href="#">
                                    Company
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <Button color="link" href="/login" className="mr-2">
                            Sign In
                        </Button>
                        <Button color="primary" href="/registration">
                            Sign Up
                        </Button>
                    </Collapse>
                </Navbar>
            </React.Fragment>
        )
    }
}

export default NavigationContainer;