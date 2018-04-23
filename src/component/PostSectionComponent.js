import React, {Component} from 'react';
import './App.css';
import CategoryComponent from "./CategoryComponent";
import PostComponent from "./PostComponent";
import * as BlogsAPI from "../server/BlogsAPI";

class PostSectionComponent extends Component {

    state = {
        posts:[]
    }

    getPosts (category) {
        const urlString = category ? category + '/posts' : 'posts';
        BlogsAPI.getPosts(urlString).then(posts =>{
                console.log(posts);
                this.setState({posts})
            }
        );
    }

    componentDidMount(){
        this.getPosts(this.props.category)
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps);
        this.getPosts(nextProps.category)
    }

    render() {
        const posts = this.state.posts||[];
        return (
            <section class="featured-posts no-padding-top">
                <div class="my-2"></div>
                <div class="container">
                    <div class="row">
        <div class="col">{posts.length>0 && <h2>All posts</h2> }
        {!posts.length && <h2>Start writing new post</h2> }
    
        </div>
                        <div class="col">
                            <form class="form-horizontal">
                                <div class="form-group row">
                                    <label for="post_sortBy" class="col-6 col-form-label text-xl-right no-gutters">Sort
                                        by</label>
                                    <div class="col-6">
                                        <select class="custom-select custom-select-sm" id="post_sortBy">
                                            <option>Post Score</option>
                                            <option>cronological</option>
                                        </select>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-8">
                            {
                                posts && posts.map( post =>  <PostComponent post={post}/> )
                            }
                        </div>
                        <CategoryComponent/>
                    </div>
                </div>
            </section>
        );
    }
}

export default PostSectionComponent;