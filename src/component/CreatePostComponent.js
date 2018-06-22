import React, { Component } from 'react';
import * as BlogsAPI from "../server/BlogsAPI";
import * as actions from "../actions/index";
import { connect } from 'react-redux'
import { PostError } from './PostErrorComponent'

const uuid = require('uuid');

class CreatePostComponent extends Component {

    state = {
        "id": uuid(),
        "title": '',
        "timestamp": Date.now(),
        "body": '',
        "author": '',
        "category": 'react',
        "buttonName":"create"
    }

    componentDidMount() {

        if (this.props.post !== undefined && this.props.post.state !== undefined) {
            let post = this.props.post.state.post;
            this.setState({
                ...post,
                buttonName: "update"
            })
        }
    }

    handleTitleChange(title) {
        this.setState({ title })
    }

    handleAuthorChange(author) {
        this.setState({ author })
    }

    handleCategoryChange(category) {
        this.setState({ category })
    }

    handlePostChange(body) {
        this.setState({ body })
    }

    onSavePost(event) {
        event.preventDefault();
        this.props.savePost(this.state);
        this.goBack(event);
    }


    goBack(event) {
        event.preventDefault();
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <main className="post blog-post col-lg-8">
                        <div className="container">
                            {this.props.hasError1 && <div> <PostError message='problem in saving' /></div>}
                            <form>
                                <div className="form-group">
                                    <label for="post_title">Title</label>
                                    <input type="text" className="form-control"
                                        value={this.state.title}
                                        onChange={(event) => this.handleTitleChange(event.target.value)}
                                        id="post_title" placeholder="Post Title" />
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label for="post_author">Author</label>
                                            <input type="text" className="form-control"
                                                value={this.state.author} id="post_author"
                                                onChange={(event) => this.handleAuthorChange(event.target.value)}
                                                placeholder="Post Author" />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label for="post_category">Category</label>
                                            <select className="form-control" id="post_category"
                                                value={this.state.category}
                                                onChange={(event) => this.handleCategoryChange(event.target.value)}>
                                                <option value={'react'}>React</option>
                                                <option value={'redux'}>Redux</option>
                                                <option value={'udacity'}>Udacity</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="post_body">Post</label>
                                    <textarea className="form-control"
                                        value={this.state.body}
                                        onChange={(event) => this.handlePostChange(event.target.value)}
                                        id="post_body" rows="7"></textarea>
                                </div>
                                <div className="form-group">
                                    <button type="button" className="btn btn-success"
                                        onClick={(event) => this.onSavePost(event)}>{this.state.buttonName}
                                    </button>
                                    <button type="button" className="btn btn-success pull-right"
                                        onClick={(event) => this.goBack(event)}>Back
                                    </button>
                                </div>
                                <div className="form-group ml-auto">
                                </div>
                            </form>
                        </div>
                    </main>

                </div>
            </div>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        updatedPost: state.posts.addedPost,
        hasError1: state.postsHaveError.errorSavingPost,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        savePost: (post) => dispatch(actions.savePost(post)),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(CreatePostComponent);