import React, { Component } from 'react';
import * as BlogsAPI from '../server/BlogsAPI'
import CategoryComponent from "./CategoryComponent";
import CommentSectionComponent from "./CommentSectionComponent";
import { Link } from "react-router-dom";
import NotFoundComponent from './NotFoundComponent';
import * as actions from "../actions/index";
import { connect } from "react-redux";

class PostDetailComponent extends Component {

    state = {
        post: {}
    }

    componentDidMount() {

        BlogsAPI.getPost(this.props.pageProps.match.params.id).then(post => {
            this.setState({ post })
        });
    }

    render() {
        let post = this.state.post || [];
        const location = {
            pathname: '/post/edit',
            state: { post: post }
        }

        return (
            <div className="container">
                <div className="row">
                    <main className="post blog-post col-8">
                        <div className="container">
                            <div className="post-single">
                                { post.id &&
                                <div className="post-details">
                                     
                                        <div className="post-meta d-flex justify-content-between">
                                            <div className="category">
                                                <Link to={`/${post.category}`}>#{post.category}</Link>
                                            </div>
                                        </div>
                                        <Link to={location}>
                                            <h1>
                                                {post.title}
                                                <button type="button" className="btn btn-link">edit</button>
                                            </h1>
                                        </Link>

                                        <div className="post-footer d-flex align-items-center flex-column flex-sm-row"><a
                                            href={null} className="author d-flex align-items-center flex-wrap">
                                            <div className="avatar"><img src="/images/user.svg" alt="..." className="img-fluid" />
                                            </div>
                                            <div className="title"><span>{post.author}</span></div>
                                        </a>
                                            <div className="d-flex align-items-center flex-wrap">
                                                <div className="date"><i className="icon-clock"></i>{new Date(post.timestamp).toDateString()}</div>
                                            <div className="comments" onClick={() => this.onVotePost('upVote', post.id)}><i className="step fi-like size-36"></i>{post.voteScore}</div>
                                            <div className="comments" onClick={() => this.onVotePost('downVote', post.id)}><i className="step fi-dislike size-36"></i></div>
                                            </div>
                                        </div>
                                        <div className="post-body">
                                            <p className="lead">{post.body}</p>
                                        </div>
                                        <div>
                                            <button type="button" className="btn-danger d-flex justify-content-right" onClick={() => this.onDelete(post.id)}>delete</button>
                                        </div>

                                        <CommentSectionComponent {...this.props} post={post} />
                                </div>
                                }
                                {
                                    !post.id && 
                                    <div className={"col"}>
                                        <NotFoundComponent/>
                                    </div>
                                }
                            </div>
                        </div>
                    </main>

                    <CategoryComponent />
                </div>
            </div>
        )
    }

    onDelete(id) {
        BlogsAPI.deletePost(id);
        setTimeout(
            this.props.history.replace('/'),
            2 * 1000);
    }

    onVotePost(vote, id) {
        this.props.votePost(vote, id)
        this.setState((prevState)=> { 
            let voteScore = vote === 'upVote' ? prevState.post.voteScore++ : prevState.post.voteScore--;
            return Object.assign({}, ...prevState, prevState.post, voteScore);
    });

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        votePost: (vote, id) => dispatch(actions.votePostOnServer(vote, id)),

    };
};

export default connect(null, mapDispatchToProps)(PostDetailComponent);
