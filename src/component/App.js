import React, {Component} from 'react';
import './Appcss';
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import RouteComponent from "../routes/RouteComponent";

class App extends Component {
    render() {
        return (
            <div>
                <HeaderComponent />
                <RouteComponent/>
                <FooterComponent/>
            </div>
        );
    }
}

export default App;
