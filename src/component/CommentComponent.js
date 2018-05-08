import React, {Component} from 'react';
import CreateCommentComponent from "./CreateCommentComponent";

class CommentComponent extends Component {

    render() {
        const comments = this.props.comments || [];
        return (
            <div class="post-comments">
                <header>
                    <h3 class="h6">Post Comments<span class="no-of-comments">{comments.length}</span></h3>
                </header>
                {
                    comments.map(comment =>
                    <div key={comment.id}>
                        { !comment.isEditing &&
                        <div key={comment.id} class="comment">
                            <div class="comment-header d-flex justify-content-between">
                                <div class="user d-flex align-items-center">
                                    <div class="image"><img src="/images/user.svg" alt="..."
                                                            class="img-fluid rounded-circle"/></div>
                                    <div class="title"><strong>{comment.author}</strong>
                                        <span class="date">{new Date(comment.timestamp).toDateString()}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="comment-body">
                                <p>{comment.body}</p>
                                <button onClick={() => this.props.startEdit(comment)}>edit</button>
                            </div>
                        </div>
                        }
                        { comment.isEditing &&
                        <CreateCommentComponent comment={comment} saveComment={(comment)=>this.props.saveComment(comment)}/>
                        }
                    </div>
                )}
            </div>
        );
    }
}

export default CommentComponent;
