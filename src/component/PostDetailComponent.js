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

       return(
        <div class="container">
            <div class="row">
                <main class="post blog-post col-8">
                    <div class="container">
                        <div class="post-single">
                            <div class="post-details">
                                <div class="post-meta d-flex justify-content-between">
                                    <div class="category">
                                        <Link to={`/${post.category}`}>#{post.category}</Link>
                                    </div>
                                </div>
                                <Link to={location}>
                                    <h1>
                                        {post.title}
                                        <button type="button" class="btn btn-link">edit</button>
                                    </h1>
                                </Link>
                                <div class="post-footer d-flex align-items-center flex-column flex-sm-row"><a
                                    href="#" class="author d-flex align-items-center flex-wrap">
                                    <div class="avatar"><img src="/images/user.svg" alt="..." class="img-fluid"/>
                                    </div>
                                    <div class="title"><span>{post.author}</span></div>
                                </a>
                                    <div class="d-flex align-items-center flex-wrap">
                                        <div class="date"><i
                                            class="icon-clock"></i>{new Date(post.timestamp).toDateString()}</div>
                                        <div class="views"><i class="icon-eye"></i> {post.voteScore}</div>
                                        <div class="comments"><i class="icon-comment"></i>{post.commentCount}</div>

                                    </div>
                                </div>
                                <div class="post-body">
                                    <p class="lead">{post.body}</p>
                                </div>
                                <CommentSectionComponent post={post}/>
                            </div>
                        </div>
                    </div>
                </main>
                <CategoryComponent/>
            </div>
        </div>
    )
        ;
    }
    }

    export
    default
    PostDetailComponent;
