import React, {Component} from 'react'
import UserRegistrationContainer from './Auth/UserRegistrationContainer'
import {Route} from 'react-router-dom'
import LogInContainer from "./Auth/LoginContainer";
import CalculatorContainer from "./CalculatorContainer";
import ProductDetailedContainer from "./ProductDetailedContainer";
import ForgotPasswordContainer from "./ForgotPasswordContainer";


class ContentContainer extends Component {

    render() {
        return (
            <React.Fragment>
                <Route exact={true} path='/' component={CalculatorContainer}/>
                <Route exact={true} path='/login' component={LogInContainer}/>
                <Route exact={true} path='/registration' component={UserRegistrationContainer}/>
                <Route exact={true} path='/calculation' component={ProductDetailedContainer}/>
                <Route exact={true} path='/forgot-password' component={ForgotPasswordContainer}/>
            </React.Fragment>
        )
    }
}

export default ContentContainer