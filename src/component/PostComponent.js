import React, {Component} from 'react';
import './App.css';
import {Link} from "react-router-dom";

class PostComponent extends Component {


    render() {
        const {post} = this.props;

        return (
            <div class="text row d-flex align-items-stretch mb-2">
                    <div class="text-inner d-flex">
                        <div class="content">
                            <header class="post-header">
                                <div class="category"><Link to={post.category}>#{post.category}</Link>
                                </div>
                                <Link to={`/posts/${post.id}`}>
                                    <h2 class="h4">{post.title}</h2>
                                </Link>
                            </header>
                            <p>{post.body}</p>
                            <footer class="post-footer d-flex align-items-center">

                                <div class="title"><span>{post.author}</span></div>
                                <div class="date"><i class="icon-clock"></i> {new Date(post.timestamp).toDateString()}</div>
                                <div class="title"><i class="icon-comment"></i>{post.commentCount}</div>
                                <div class="comments"><i class="icon-eye"></i>{post.commentCount}</div>
                            </footer>
                        </div>
                    </div>
            </div>
        );
    }
}

export default PostComponent;
