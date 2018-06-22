import React, { Component } from 'react';
import { Link } from "react-router-dom";
import * as BlogsAPI from '../server/BlogsAPI'
import * as actions from "../actions/index";
import { connect } from 'react-redux'

class PostComponent extends Component {

    state = {
        post: { category:'/'}
    }

    componentDidMount(){
        this.setState({ post:this.props.post})
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ post: nextProps.post })
    }

    render() {
        const { post } = this.state;
        const location = {
            pathname: '/post/edit',
            state: { post: post }
        }

        return (
            <div className="text row d-flex align-items-stretch mb-2">
                <div className="text-inner d-flex">
                    <div className="content">
                        <header className="post-header">
                            <div className="category"><Link to={post.category}>#{post.category}</Link>
                            </div>
                            <Link to={`/posts/${post.id}`}>
                                <h2 className="h4">{post.title}</h2>
                            </Link>
                        </header>
                        <p>{post.body}</p>
                        <footer className="post-footer d-flex align-items-center">

                            <div className="title"><span>{post.author}</span></div>
                            <div className="date"><i className="icon-clock"></i> {new Date(post.timestamp).toDateString()}</div>
                            <div className="title"><i className="icon-comment"></i>{post.commentCount}</div>
                            <div className="comments"><i className="step fi-like size-24" ></i>{post.voteScore}</div>
                        </footer>
                        <div className="d-flex align-items-center">
                            <div className="delete-post-button">
                                <button type="button" className="btn btn-danger" onClick={() => this.props.deletePost(post)}>delete</button>
                            </div>
                            <div className="vote-button" onClick={() => this.onVotePost('upVote', post.id)}><i className=" step fi-like icons-size"></i></div>
                            <span className="vote-button" >{post.voteScore}</span>
                            <div className="vote-button" onClick={() => this.onVotePost('downVote', post.id)}><i className=" step fi-dislike icons-size"></i></div>
                            <Link className={"delete-post-button"} to={location}>
                                <button type="button" className="btn btn-success">edit</button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        );
    }

    onVotePost(vote, id) {
        this.props.votePost(vote, id)
        this.setState((prevState) => {
            let voteScore = vote === 'upVote' ? prevState.post.voteScore++ : prevState.post.voteScore--;
            return Object.assign({}, ...prevState, prevState.post, voteScore);
        });

    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        votePost: (vote, id) => dispatch(actions.votePostOnServer(vote, id)),
        deletePost: (post) => dispatch(actions.deletePostOnServer(post)),
    };
};



export default connect(null, mapDispatchToProps)(PostComponent);
