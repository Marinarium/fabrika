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
            <main className="main">
                <form className="form" action="/">
                    <h1 className="form__title">Sign up</h1>
                    <div className="form__desc">
                        <p className="form__p">Copy
                            Account will allow you to track your order status online</p>
                        <p className="form__p">Already have an account? <a href="#" className="form__link">Log in</a>
                        </p>
                    </div>
                    <div className="form__input-wrap">
                        <label htmlFor="mail" className="form__label">Email</label>
                        <input id="mail" type="email" className="form__input" required placeholder="Enter email"/>
                    </div>
                    <div className="form__input-wrap">
                        <div className="form__label-wrap">
                            <label htmlFor="password" className="form__label">Password</label>
                            <a href="" className="form__link form__link_light">Forgot password?</a>
                        </div>
                        <div className="form__password-wrap">
                            <input id="password" type="password" className="form__input" required
                                   placeholder="Enter password"/>
                            <button className="form__eye" type="button"></button>
                        </div>
                    </div>
                    <div className="form__input-wrap">
                        <input type="checkbox" className="form__checkbox-input" id="terms" name="terms" value="terms"/>
                        <label htmlFor="terms" className="form__label">I agree with the
                            <a href="#" className="form__link">terms ofuse</a>
                        </label>
                    </div>
                    <button className="form__btn" type="submit">Sign in</button>
                </form>
            </main>
        )
    }
}

export default UserRegistration;