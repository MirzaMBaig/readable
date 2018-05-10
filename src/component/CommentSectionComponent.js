import React, { Component } from 'react';
import * as BlogsAPI from "../server/BlogsAPI";
import CommentComponent from "./CommentComponent";
import CreateCommentComponent from "./CreateCommentComponent";

const uuid = require('uuid');

class CommentSectionComponent extends Component {

    state = {
        comments:[]
    }

    getComments(id) {
        BlogsAPI.getComments(id).then(comments =>{
                this.setState({comments})
            }
        );
    }

    componentDidMount(){
        this.getComments(this.props.post.id)
    }

    componentWillReceiveProps(nextProps){
        this.getComments(nextProps.post.id)
    }

    saveComment(comment){
        let commentwithId = {
            "id":comment.id||uuid(),
            "parentId":this.props.post.id,
            "body":comment.usercomment,
            "author":comment.username,
            "timestamp":new Date().getTime(),
        };
        BlogsAPI.saveOrUpdateComment({
            "id":comment.id||uuid(),
            "parentId":this.props.post.id,
            "body":comment.usercomment,
            "author":comment.username,
            "timestamp":new Date().getTime(),
            "isEditing":comment.isEditing,
        }).then(data => this.getComments(this.props.post.id));

    }

    cancelComments(event){
        this.getComments(this.props.post.id)
    }

    startEdit(comment) {
        comment.isEditing = true;
        let prevComments = this.state.comments||{};
        let filterEditedComment = prevComments.filter(c => c.id!==comment.id);
        filterEditedComment.push(comment);
        this.setState({
            filterEditedComment,
        })
    }

    render() {
        const comments = this.state.comments||[];
        return (
            <div>
               <CommentComponent cancelComments={(event)=> this.cancelComments(event)} saveComment={(comment)=>this.saveComment(comment)} startEdit={(comment)=>this.startEdit(comment)} comments={comments} />
               <CreateCommentComponent  cancelComments={(event)=> this.cancelComments(event)} saveComment={(comment)=>this.saveComment(comment)} />
            </div>
        );
    }
}

export default CommentSectionComponent;
