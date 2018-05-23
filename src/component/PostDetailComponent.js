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
                                        href={null} class="author d-flex align-items-center flex-wrap">
                                        <div class="avatar"><img src="/images/user.svg" alt="..." class="img-fluid"/>
                                        </div>
                                        <div class="title"><span>{post.author}</span></div>
                                    </a>
                                        <div class="d-flex align-items-center flex-wrap">
                                            <div class="date"><i class="icon-clock"></i>{new Date(post.timestamp).toDateString()}</div>
                                            <div class="comments" onClick={()=>this.votePost('upVote', post.id)}><i class="step fi-like size-36"></i>{post.voteScore}</div>
                                            <div class="comments" onClick={()=>this.votePost('downVote',post.id)}><i class="step fi-dislike size-36"></i></div>
                                        </div>
                                    </div>
                                    <div class="post-body">
                                        <p class="lead">{post.body}</p>
                                    </div>
                                    <div>
                                        <button type="button" class="btn-danger d-flex justify-content-right" onClick={()=> this.onDelete(post.id)}>delete</button>
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
