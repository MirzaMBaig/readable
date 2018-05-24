import React, {Component} from 'react';
import {Link} from "react-router-dom";

class PostComponent extends Component {


    render() {
        const {post} = this.props;

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
                        </div>
                    </div>
            </div>
        );
    }
}

export default PostComponent;
