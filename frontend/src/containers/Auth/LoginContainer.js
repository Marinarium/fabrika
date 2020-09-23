import React, {Component} from 'react';
import {
    Button,
    Col,
    Form,
    FormGroup, Input, Label,
    Row
} from "reactstrap";
import {ValidationInput, ValidateState, Rule, TypeOfRule} from "../../helpers/ValidationHelper";


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
                .then(response => {
                    console.log(response);
                });
        }
    };

    render() {
        const {username, userPassword} = this.state;

        return (
            <Row>
                <Col md="6">
                    <h2 className="pt-5 pb-3">Sign In</h2>
                    <p>Account will allow you to track your order status online.</p>
                    <p>
                        Don’t have an account yet?{' '}
                        <a href="/registration">Create an account</a>
                    </p>
                    <Form className="p-3">
                        <FormGroup row>
                            <Label for="inputUsername">Username</Label>
                            <Input
                                name="username"
                                maxLength={100}
                                value={username.value}
                                onChange={this.handleChange}
                                type="text"
                                className={username.isValid ? '' : 'error'}
                                validationMessageLength={username.validationMessage.length}
                                validationMessageText={username.validationMessage[0]}
                                invalid={!username.isValid}
                            />
                        </FormGroup>
                        <FormGroup row>
                            <Label for="inputPassword">Password</Label>
                            <Input
                                name="userPassword"
                                value={userPassword.value}
                                onChange={this.handleChange}
                                type="password"
                                className={userPassword.isValid ? '' : 'error'}
                                invalid={!userPassword.isValid}
                                validationMessageLength={userPassword.validationMessage.length}
                                validationMessageText={userPassword.validationMessage[0]}
                            />
                        </FormGroup>
                    </Form>
                    <Button
                        outline
                        color="secondary"
                        className="mt-2"
                        onClick={this.submit}
                    >
                        Sign In
                    </Button>
                </Col>
                <Col md="6"/>
            </Row>
        )
    }
}

export default LogInContainer;