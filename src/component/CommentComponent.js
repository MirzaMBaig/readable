import React, {Component} from 'react';
import CreateCommentComponent from "./CreateCommentComponent";
import * as BlogsAPI from '../server/BlogsAPI'

class CommentComponent extends Component {

    render() {
        const comments = this.props.comments;
        return (
            <div class="post-comments">
                <header>
                    <h3 class="h6">Post Comments<span class="no-of-comments">{comments.length}</span></h3>
                </header>
                {
                    comments.map(comment =>
                        <div key={comment.id}>
                            {!comment.isEditing &&
                            <div key={comment.id} class="comment">
                                <div class="comment-header d-flex justify-content-between">
                                    <div class="user d-flex align-items-center">
                                        <div class="image"><img src="/images/user.svg" alt="..."
                                                                class="img-fluid rounded-circle"/></div>
                                        <div class="title"><strong>{comment.author}</strong>
                                            <span class="date">{new Date(comment.timestamp).toDateString()}</span>
                                            <span class="comments" onClick={()=>this.voteComment('upVote', comment.id)}><i class="step fi-like size-36"></i>{comment.voteScore}</span>
                                            <span class="comments" onClick={()=>this.voteComment('downVote',comment.id)}><i class="step fi-dislike size-36"></i></span>

                                        </div>
                                    </div>
                                </div>
                                <div class="comment-body">
                                    <p>{comment.body}</p>
                                    <div className={'row'}>
                                        <div className={'col-md-6'}>
                                            <button onClick={() => this.props.startEdit(comment)}>edit</button>
                                        </div>
                                        <div className={'col-md-6'}>
                                            <button type="button" class="btn-danger d-flex justify-content-right"
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
