import React, {Component} from 'react';
import './App.css';
import {Link} from "react-router-dom";

class HeaderComponent extends Component {
    render() {
        const { id } = this.props;
        return (
            <header className="header">
                <nav className="navbar navbar-expand-lg">
                    <div className="search-area">
                        <div className="search-area-inner d-flex align-items-center justify-content-center">
                            <div className="close-btn"><i className="icon-close"></i></div>
                            <div className="row d-flex justify-content-center">
                                <div className="col-md-8">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="navbar-header d-flex align-items-center justify-content-between">
                            <Link to="/" className="navbar-brand"><h1>Readable</h1></Link>
                            <button type="button" data-toggle="collapse" data-target="#navbarcollapse" aria-controls="navbarcollapse" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler"><span></span><span></span><span></span></button>
                        </div>
                        <div id="navbarcollapse" className="collapse navbar-collapse">
                            <Link className="ml-auto" to={"/post/create"}>
                                <button type="button" className="btn btn-success">Create Post</button>
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default HeaderComponent;