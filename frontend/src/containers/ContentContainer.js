import React, {Component} from 'react'
import UserRegistrationContainer from './Auth/UserRegistrationContainer'
import {Route} from 'react-router-dom'
import LogInContainer from "./Auth/LoginContainer";
import CalculatorContainer from "./CalculatorContainer";


class ContentContainer extends Component {

    render() {
        return (
            <React.Fragment>
                <Route exact={true} path='/' component={CalculatorContainer}/>
                <Route exact={true} path='/login' component={LogInContainer}/>
                <Route exact={true} path='/registration' component={UserRegistrationContainer}/>
            </React.Fragment>
        )
    }
}

export default ContentContainer