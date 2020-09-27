import React from 'react'
import ContentContainer from './containers/ContentContainer'
import {BrowserRouter} from 'react-router-dom'
import NavigationContainer from "./containers/NavigationContainer";
import {Container} from "reactstrap";
import FooterContainer from "./containers/FooterContainer";


function App() {
    return (
        <BrowserRouter>
            <div className="sign-in wrapper">
                <div className="content">
                    <NavigationContainer/>
                    <ContentContainer/>
                    <FooterContainer/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
