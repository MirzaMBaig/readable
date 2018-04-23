import React, { Component } from 'react';
import './App.css';
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
        console.log("called save");
        console.log(comment);
        let commentwithId = {
            "id":uuid(),
            "parentId":this.props.post.id,
            "body":comment.usercomment,
            "author":comment.username,
            "timestamp":new Date().getTime(),
        };
        console.log(commentwithId);
        BlogsAPI.saveComment({
            "id":uuid(),
            "parentId":this.props.post.id,
            "body":comment.usercomment,
            "author":comment.username,
            "timestamp":new Date().getTime(),
        }).then(data => this.getComments(this.props.post.id));

    }

    render() {
        const comments = this.state.comments||[];
        return (
            <div>
               <CommentComponent comments={comments}/>
               <CreateCommentComponent saveComment={(comment)=>this.saveComment(comment)}/>
            </div>
        );
    }
}

export default CommentSectionComponent;
