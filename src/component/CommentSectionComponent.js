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
        console.log(comment);
        BlogsAPI.saveOrUpdateComment({
            "id":comment.id||uuid(),
            "parentId":this.props.post.id,
            "body":comment.usercomment,
            "author":comment.username,
            "timestamp":new Date().getTime(),
            "isEditing":comment.isEditing,
        }).then(data => this.getComments(this.props.post.id));

    }

    cancelComments(){

    }

    startEdit(comment) {
        comment.isEditing = true;
        let prevComments = this.state.comments||{};
        let filterEditedComment = prevComments.filter(c => c.id!==comment.id);
        filterEditedComment.push(comment);
        console.log(filterEditedComment);
        this.setState({
            filterEditedComment,
        })
    }

    endEdit(comment) {
        comment.isEditing = false;
    }

    render() {
        const comments = this.state.comments||[];
        return (
            <div>
               <CommentComponent saveComment={(comment)=>this.saveComment(comment)} startEdit={(comment)=>this.startEdit(comment)} comments={comments} />
               <CreateCommentComponent  saveComment={(comment)=>this.saveComment(comment)} />
            </div>
        );
    }
}

export default CommentSectionComponent;
