import React, {Component} from 'react';
import './App.css';
import HeaderComponent from "./HeaderComponent";
import PostSectionComponent from "./PostSectionComponent";
import FooterComponent from "./FooterComponent";
import RouteComponent from "../routes/RouteComponent";

class App extends Component {
    render() {
        return (
            <div>
                <HeaderComponent/>
                <RouteComponent/>
                <FooterComponent/>
            </div>
        );
    }
}

export default App;
