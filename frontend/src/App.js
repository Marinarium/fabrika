import React from 'react'
import ContentContainer from './containers/ContentContainer'
import {BrowserRouter} from 'react-router-dom'
import NavigationContainer from "./containers/NavigationContainer";
import {Container} from "reactstrap";


function App() {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Container>
                    <NavigationContainer/>
                    <ContentContainer/>
                </Container>
            </div>
        </BrowserRouter>
    )
}

export default App;
