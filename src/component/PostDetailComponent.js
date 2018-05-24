import React, {Component} from 'react';
import * as BlogsAPI from '../server/BlogsAPI'
import CategoryComponent from "./CategoryComponent";
import CommentSectionComponent from "./CommentSectionComponent";
import {Link} from "react-router-dom";

class PostDetailComponent extends Component {

    state = {
        id: '',
        message: '',
        post: {}
    }

    componentDidMount() {
        let id = this.props.pageProps.match.params.id;
        BlogsAPI.getPost(id).then(post => {
                this.setState({post})
            }
        );
    }

    render() {
        let post = this.state.post || [];
        const location = {
            pathname: '/post/edit',
            state: {post: post}
        }

        return (
            <div className="container">
                <div className="row">
                    <main className="post blog-post col-8">
                        <div className="container">
                            <div className="post-single">
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
                                        <div className="avatar"><img src="/images/user.svg" alt="..." className="img-fluid"/>
                                        </div>
                                        <div className="title"><span>{post.author}</span></div>
                                    </a>
                                        <div className="d-flex align-items-center flex-wrap">
                                            <div className="date"><i className="icon-clock"></i>{new Date(post.timestamp).toDateString()}</div>
                                            <div className="comments" onClick={()=>this.votePost('upVote', post.id)}><i className="step fi-like size-36"></i>{post.voteScore}</div>
                                            <div className="comments" onClick={()=>this.votePost('downVote',post.id)}><i className="step fi-dislike size-36"></i></div>
                                        </div>
                                    </div>
                                    <div className="post-body">
                                        <p className="lead">{post.body}</p>
                                    </div>
                                    <div>
                                        <button type="button" className="btn-danger d-flex justify-content-right" onClick={()=> this.onDelete(post.id)}>delete</button>
                                    </div>

                                    <CommentSectionComponent {...this.props} post={post}/>
                                </div>
                            </div>
                        </div>
                    </main>
                    <CategoryComponent/>
                </div>
            </div>
        )
    }

    onDelete(id) {
        BlogsAPI.deletePost(id);
        setTimeout(
            this.props.history.replace('/'),
            2*1000);


    }

    votePost(vote, id) {
        BlogsAPI.votePost({"option":vote}, id).then(post=> this.setState({post}));

    }
}

export default PostDetailComponent;
