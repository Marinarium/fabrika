import React, {Component} from 'react';
import {
    Col, Row, Button, Form, FormGroup, Input, Label, Container, Navbar, Nav, NavbarBrand,
    NavbarToggler, Collapse, NavItem, NavLink
} from 'reactstrap';


class UserRegistration extends Component {
    constructor() {
        super()
        this.state = {
            titleText: "",
            titleStyles: ""
        }
    }

    render() {
        return (
            <Row>
                <Col md="6">
                    <h2 className="pt-5 pb-3">Sign Up</h2>
                    <p>Account will allow you to track your order status online </p>
                    <p>
                        Already have an account? <a href="/login">Log in</a>
                    </p>
                    <Form className="p-3">
                        <FormGroup row>
                            <Label for="inputUsername">Username</Label>
                            <Input
                                type="text"
                                name="username"
                                id="inputUsername"
                                placeholder=""
                            />
                        </FormGroup>
                        <FormGroup row>
                            <Label for="inputEmail">Email</Label>
                            <Input type="email" name="email" id="inputEmail" placeholder=""/>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="inputPassword">Password</Label>
                            <Input
                                type="password"
                                name="password"
                                id="inputPassword"
                                placeholder=""
                            />
                        </FormGroup>
                        <FormGroup row>
                            <Label for="inputPasswordRepeat">Password repeat</Label>
                            <Input
                                type="password"
                                name="password"
                                id="inputPasswordRepeat"
                                placeholder=""
                            />
                        </FormGroup>
                        <FormGroup row>
                            <Col>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" id="checkbox"/> I agree with the
                                        terms of use
                                    </Label>
                                </FormGroup>
                            </Col>
                        </FormGroup>
                    </Form>
                    <Button outline disabled color="secondary" className="mt-2">
                        Sign Up
                    </Button>
                </Col>
                <Col md="6"/>
            </Row>
        )
    }
}

export default UserRegistration;