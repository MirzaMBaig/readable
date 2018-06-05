import React, {Component} from 'react';
import {Link} from "react-router-dom";
import * as BlogsAPI from "../server/BlogsAPI";
import { PostError } from './PostErrorComponent'
import { connect } from "react-redux";

class CategoryComponent extends Component {

    state = {
        categories:[]
    }

    componentDidMount(){
        BlogsAPI.getCategories().then(categories =>
            this.setState({categories})
        );
    }

    render() {
        const categories = this.state.categories || [];
        return (
            <div className={"col-4"}>
                <div className={"widget categories"}>
                    <header>
                        <h3 className={"h6"}>Categories</h3>
                        {this.props.hasError && <PostError message='Error retriving categories' />}
                    </header>
                    {categories.map( category =>
                        <div key={category.path} className={"item d-flex justify-content-between"}>
                            <Link to={`/${category.path}`}>{category.name}</Link>
                        </div>
                    )}
                </div>
            </div>
        );
    }

}

function mapStateToProps(state, props) {
    return {
        hasError: state.postsHaveError.errorRetrivingPost,
    }
};

export default connect(mapStateToProps)(CategoryComponent);