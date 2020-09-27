import React, {Component} from 'react'
import {Nav, Navbar, NavItem, NavLink} from "reactstrap";


class FooterContainer extends Component {

    render() {
        return (
            <React.Fragment>
                <footer className="">
                    <div className="wrap">
                        <a href="#" className="lang">рус</a>
                        <a href="#" className="year">2020 →</a>
                    </div>
                    <div className="footer-menu">
                        <ul className="footer-menu__list">
                            <li className="footer-menu__item"><a href="#" className="footer-menu__link">Materials</a>
                            </li>
                            <li className="footer-menu__item"><a href="#" className="footer-menu__link">Requirements</a>
                            </li>
                            <li className="footer-menu__item"><a href="#" className="footer-menu__link">Technology and
                                machines</a></li>
                            <li className="footer-menu__item"><a href="#" className="footer-menu__link">For partners</a>
                            </li>
                            <li className="footer-menu__item"><a href="#"
                                                                 className="footer-menu__link">Сonfidentiality</a></li>
                        </ul>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}

export default FooterContainer;