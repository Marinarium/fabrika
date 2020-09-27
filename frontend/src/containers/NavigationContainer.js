import React, {Component} from 'react'
import {Button, Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from "reactstrap";


class NavigationContainer extends Component {

    render() {
        return (
            <React.Fragment>
                <header className="header">
                    <a href="#" className="logo">fabrika</a>
                    <nav className="main-menu">
                        <ul className="main-menu__list">
                            <li className="main-menu__item">
                                <a href="#" className="main-menu__link">Platform</a>
                            </li>
                            <li className="main-menu__item">
                                <a href="#" className="main-menu__link">Capabilities</a>
                            </li>
                            <li className="main-menu__item">
                                <a href="#" className="main-menu__link">Company</a>
                            </li>
                        </ul>
                    </nav>
                    <nav className="user-menu">
                        <ul className="user-menu__list">
                            <li className="user-menu__item">
                                <a href="#" className="user-menu__link user-menu__link_in">Sign in</a>
                            </li>
                            <li className="user-menu__item">
                                <a href="#" className="user-menu__link user-menu__link_up">Sign up</a>
                            </li>
                        </ul>
                    </nav>
                </header>
            </React.Fragment>
        )
    }
}

export default NavigationContainer;