import React, { Component } from 'react';
import { Link } from "react-router-dom";
import CategoryComponent from "./CategoryComponent";

class NotFoundComponent extends Component {
    render() {
        return (
            <section className={"featured-posts no-padding-top"}>
                <div className={'my-2'}></div>
                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"col"}>
                            <h4>You have landed on a different planet
                            <Link to={'/'}>
                                <button className="btn btn-link">Go home</button>
                            </Link></h4>
                        </div>
                    </div>
                </div>
                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"col-8"}>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default NotFoundComponent;