import React, {Component} from 'react';
import './App.css';
import {Link} from "react-router-dom";
import * as BlogsAPI from "../server/BlogsAPI";

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
            <div class="col-4">
                <div class="widget categories">
                    <header>
                        <h3 class="h6">Categories</h3>
                    </header>
                    {categories.map( category =>
                        <div key={category.path} class="item d-flex justify-content-between">
                            <Link to={`/${category.path}`}>{category.name}</Link>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default CategoryComponent;