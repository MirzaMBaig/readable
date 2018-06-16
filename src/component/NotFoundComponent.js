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
                            <h4>You have landed on a different planet, <br />Go Home</h4>
                        </div>
                        <div className={"col"}>
                            <form className={"form-horizontal"}>
                                <div className={"form-group row"}>
                                    <label htmlFor="post_sortBy" className={"col-6 col-form-label text-xl-right no-gutters"}>Sort
                                        by</label>
                                    <div className={"col-6"}>
                                        <select className={"custom-select custom-select-sm"} id="post_sortBy"
                                            value={this.props.sortValue}
                                            onChange={(event) => this.props.sortPosts(event.target.value)}>
                                            <option value={'voteScore'}>Score</option>
                                            <option value={'timestamp'}>Time</option>
                                        </select>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"col-8"}>

                        </div>
                        <CategoryComponent />
                    </div>
                </div>
            </section>
        );
    }
}

export default NotFoundComponent;