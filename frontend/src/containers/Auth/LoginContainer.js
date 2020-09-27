import React, {Component} from 'react';
import {Button, Col, Form, FormGroup, Label, Row} from "reactstrap";
import {ValidationInput, ValidateState, Rule, TypeOfRule} from "../../helpers/ValidationHelper";
import Input from '../../controls/Input';


class LogInContainer extends Component {

    constructor() {
        super();
        this.state = {
            username: new ValidationInput([new Rule(TypeOfRule.REQUIRED, 'Введите имя пользователя')]),
            userPassword: new ValidationInput([new Rule(TypeOfRule.REQUIRED, 'Введите пароль')])
        };
    }

    handleChange = event => {
        const {name, value} = event.target;
        let input = this.state[name];
        this.setState({
            [name]: new ValidationInput(input.rules, input.isValid, value, input.validationMessage)
        });
    };

    submit = (event) => {
        event.preventDefault();

        let validationResult = ValidateState(this.state);
        this.setState({...validationResult.state});
        if (validationResult.isValid) {
            fetch('/api-auth/login/', {
                method: 'POST',
                body: JSON.stringify({
                    "username": this.state.username.value,
                    "password": this.state.userPassword.value
                })
            })
                .then(response => response.json())
                .then(result => {
                    if (result['auth_token']) {
                        localStorage.setItem('token', result['auth_token']);
                        window.location = '/';
                    } else {
                        console.log(result['message']);
                    }
                })
        }
    };

    render() {
        const {username, userPassword} = this.state;

        return (
            <main className="main">
                <form className="form" action="/">
                    <h1 className="form__title">Sign in</h1>
                    <div className="form__desc">
                        <p className="form__p">Copy
                            Account will allow you to track your order status online.</p>
                        <p className="form__p">Don’t have an account yet? <a href="#" className="form__link">Create an
                            account</a></p>
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
                    <button className="form__btn" type="submit">Sign in</button>
                </form>
            </main>
        )
    }
}

export default LogInContainer;