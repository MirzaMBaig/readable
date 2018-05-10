import React, {Component} from 'react';

class CreateCommentComponent extends Component {

    state = {
        "id":null,
        "username": '',
        "useremail": '',
        "usercomment": '',
    }

    handleNameChange(username){
        this.setState({username})
    }

    handleEmailChange(useremail){
        this.setState({useremail})
    }

    handleCommentChange(usercomment){
        this.setState({usercomment})
    }

    saveComments(event) {
        event.preventDefault();
        if (this.state.username.length > 0
            && this.state.usercomment.length > 0) {
            this.props.saveComment(this.state)
            this.setState({
                "username": '',
                "useremail": '',
                "usercomment": '',
            })

        } else {
            alert('Please provide all details for comments');
        }
    }

    componentDidMount(){
        let editComment = this.props.comment||{};
        this.setState({
            "id":editComment.id,
            "username": editComment.author,
            "usercomment": editComment.body,
        })
    }

    render() {
        return (
            <div>
                <div class="add-comment">
                    <header>
                        <h3 class="h6">Leave a comment</h3>
                    </header>
                    <form action="#" class="commenting-form">
                        <div class="row">
                            <div class="form-group col-md-6">
                                <input type="text" name="username" id="username" onChange={(event)=> this.handleNameChange(event.target.value)} value={this.state.username}
                                       placeholder="Name" class="form-control"/>
                            </div>
                            <div class="form-group col-md-6">
                                <input type="email" name="username" id="useremail"  onChange={(event) => this.handleEmailChange(event.target.value)}  value={this.state.useremail}
                                       placeholder="Email Address (will not be published)" class="form-control"/>
                            </div>
                            <div class="form-group col-md-12">
                                <textarea name="usercomment" id="usercomment" onChange={(event) =>  this.handleCommentChange(event.target.value)}  value={this.state.usercomment}
                                          placeholder="Type your comment" class="form-control"></textarea>
                            </div>
                            <div class="form-group col-md-3">
                                <button type="button" class="btn btn-secondary"
                                        onClick={(event) => this.saveComments(event)}>Submit Comment
                                </button>
                            </div>
                            <div class="form-group col-md-3 ml-auto">
                                <button type="button" class="btn btn-secondary"
                                        onClick={(event) => this.cancelComments(event)}>Cancel
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    cancelComments(event) {
        this.props.cancelComments(event);
    }
}

export default CreateCommentComponent;
