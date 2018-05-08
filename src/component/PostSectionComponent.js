import React, {Component} from 'react';
import CategoryComponent from "./CategoryComponent";
import PostComponent from "./PostComponent";
import * as BlogsAPI from "../server/BlogsAPI";
const sortBy = require('sort-by')

class PostSectionComponent extends Component {

    state = {
        posts:[],
        sortValue:'voteScore',
    }

    sortPost(sortValue) {
        this.setState((prevState) => {
            return {
                sortValue: sortValue,
                posts: prevState.posts.sort(sortBy('-'+sortValue)),
            };
        });

    }

    getPosts (category) {
        const urlString = category ? category + '/posts' : 'posts';
        BlogsAPI.getPosts(urlString).then(posts =>{
                console.log(posts);
                this.setState({posts})
            }
        )
    }

    componentDidMount(){
        this.getPosts(this.props.category)
    }

    componentWillReceiveProps(nextProps){
        this.getPosts(nextProps.category)
    }

    render() {
        const posts = this.state.posts||[];
        return (
            <section class="featured-posts no-padding-top">
                <div class="my-2"></div>
                <div class="container">
                    <div class="row">
        <div class="col">{posts.length>0 && <h2>All posts {this.props.category && 'of category '+this.props.category}</h2> }
        {!posts.length && <h2>Start writing new post</h2> }
    
        </div>
                        <div class="col">
                            <form class="form-horizontal">
                                <div class="form-group row">
                                    <label for="post_sortBy" class="col-6 col-form-label text-xl-right no-gutters">Sort
                                        by</label>
                                    <div class="col-6">
                                        <select class="custom-select custom-select-sm" id="post_sortBy" value={this.state.sortValue}
                                                onChange={(event) => this.sortPost(event.target.value)}>
                                            <option value={'voteScore'}>Score</option>
                                            <option value={'timestamp'}>Time</option>
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