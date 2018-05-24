import React, {Component} from 'react';
import CreateCommentComponent from "./CreateCommentComponent";
import * as BlogsAPI from '../server/BlogsAPI'

class CommentComponent extends Component {

    render() {
        const comments = this.props.comments;
        return (
            <div className="post-comments">
                <header>
                    <h3 className="h6">Post Comments<span className="no-of-comments">{comments.length}</span></h3>
                </header>
                {
                    comments.map(comment =>
                        <div key={comment.id}>
                            {!comment.isEditing &&
                            <div key={comment.id} className="comment">
                                <div className="comment-header d-flex justify-content-between">
                                    <div className="user d-flex align-items-center">
                                        <div className="image"><img src="/images/user.svg" alt="..."
                                                                className="img-fluid rounded-circle"/></div>
                                        <div className="title"><strong>{comment.author}</strong>
                                            <span className="date">{new Date(comment.timestamp).toDateString()}</span>
                                            <span className="comments" onClick={()=>this.voteComment('upVote', comment.id)}><i className="step fi-like size-36"></i>{comment.voteScore}</span>
                                            <span className="comments" onClick={()=>this.voteComment('downVote',comment.id)}><i className="step fi-dislike size-36"></i></span>

                                        </div>
                                    </div>
                                </div>
                                <div className="comment-body">
                                    <p>{comment.body}</p>
                                    <div className={'row'}>
                                        <div className={'col-md-6'}>
                                            <button onClick={() => this.props.startEdit(comment)}>edit</button>
                                        </div>
                                        <div className={'col-md-6'}>
                                            <button type="button" className="btn-danger d-flex justify-content-right"
                                                    onClick={() => this.onDeleteComment(comment.id, this.props.post.id)}>delete
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            }
                            {comment.isEditing &&
                            <CreateCommentComponent cancelComments={(event) => this.props.cancelComments(event)}
                                                    comment={comment}
                                                    saveComment={(comment) => this.props.saveComment(comment)}/>
                            }
                        </div>
                    )}
            </div>
        );
    }

    onDeleteComment(id, postID) {
        BlogsAPI.deleteComment(id);
        setTimeout(
            this.props.history.replace(`/posts/${postID}`),
            2 * 1000);
    }

    voteComment(vote, id) {
        BlogsAPI.voteComment({"option":vote}, id)
            .then(comment=> {
                setTimeout(
                    this.props.history.replace(`/posts/${comment.parentId}`),
                    2 * 1000);
        });
    }
}

export default CommentComponent;
