import React, {Component} from 'react';
import './App.css';
import * as BlogsAPI from "../server/BlogsAPI";

const uuid = require('uuid');

class CreatePostComponent extends Component {

    state = {
        "id": uuid(),
        "title": '',
        "timestamp": Date.now(),
        "body": '',
        "author": '',
        "category": 'react',
    }

    componentDidMount(){

        let post = this.props.post.state.post;
        this.setState({
            id:post.id,
            title:post.title,
            "timestamp": Date.now(),
            body:post.body,
            author:post.author,
            category:post.category,
        })
    }

    handleTitleChange(title) {
        this.setState({title})
    }

    handleAuthorChange(author) {
        this.setState({author})
    }

    handleCategoryChange(category) {
        this.setState({category})
    }

    handlePostChange(body) {
        this.setState({body})
    }

    savePost(event) {
        console.log("this is title " + this.state.title + typeof this.state.title);
        console.log(this.state);
        event.preventDefault();
        /*if (this.state.title.length > 0
            && this.state.author.length > 0
            && this.state.category.length > 0
            && this.state.post.length > 0) {*/
            BlogsAPI.savePost(this.state)
            //this.props.history.push('/')

        } /*else {
            alert('Please provide all details for post');
        }*/

    render() {
        return (
            <div class="container">
                <div class="row">
                    <main class="post blog-post col-lg-8">
                        <div class="container">
                            <form>
                                <div class="form-group">
                                    <label for="post_title">Title</label>
                                    <input type="text" class="form-control"
                                           value={this.state.title}
                                           onChange={(event) => this.handleTitleChange(event.target.value)}
                                           id="post_title" placeholder="Post Title"/>
                                </div>
                                <div class="row">
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label for="post_author">Author</label>
                                            <input type="text" class="form-control"
                                                   value={this.state.author} id="post_author"
                                                   onChange={(event) => this.handleAuthorChange(event.target.value)}
                                                   placeholder="Post Author"/>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label for="post_category">Category</label>
                                            <select class="form-control" id="post_category"
                                                    value={this.state.category}
                                                    onChange={(event) => this.handleCategoryChange(event.target.value)}>
                                                <option value={'react'}>React</option>
                                                <option value={'redux'}>Redux</option>
                                                <option value={'udacity'}>Udacity</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="post_body">Post</label>
                                    <textarea class="form-control"
                                              value={this.state.body}
                                              onChange={(event) => this.handlePostChange(event.target.value)}
                                              id="post_body" rows="7"></textarea>
                                </div>
                                <div class="form-group ml-auto">
                                    <button type="button" class="btn btn-success ml-auto"
                                            onClick={(event) => this.savePost(event)}>Create
                                    </button>
                                </div>
                            </form>
                        </div>
                    </main>

                </div>
            </div>
        );
    }
}

export default CreatePostComponent;
