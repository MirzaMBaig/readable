import React, {Component} from 'react';
import CategoryComponent from "./CategoryComponent";
import PostComponent from "./PostComponent";
import * as BlogsAPI from "../server/BlogsAPI";
import * as actions from "../actions/index";
import {connect} from "react-redux";

class PostSectionComponent extends Component {

    componentDidMount() {
        BlogsAPI.getPosts('posts')
            .then(posts => this.props.getPosts(posts))
            .catch(err => {
                console.log('could not get post from the server, try again');
                return this.props.getPosts([]);
            })
    }

    render() {
        let posts = this.props.posts || [];
        console.log(this.props);
        if(this.props.category){
            posts =  posts.filter(post=> post.category === this.props.category)
        }
        return (
            <section class="featured-posts no-padding-top">
                <div className={'my-2'}></div>
                <div className={"container"}>
                    <div className={"row"}>
                        <div class="col">{posts.length > 0 &&
                        <h2>All posts {this.props.category && 'of category ' + this.props.category}</h2>}
                            {!posts.length && <h2>Start writing new post</h2>}
                        </div>
                        <div class="col">
                            <form class="form-horizontal">
                                <div class="form-group row">
                                    <label for="post_sortBy" class="col-6 col-form-label text-xl-right no-gutters">Sort
                                        by</label>
                                    <div class="col-6">
                                        <select class="custom-select custom-select-sm" id="post_sortBy"
                                                value={this.props.sortValue}
                                                onChange={(event) => this.props.sortPosts(event.target.value)}>
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
                                posts && posts.map(post => <PostComponent key={post.id} post={post}/>)
                            }
                        </div>
                        <CategoryComponent/>
                    </div>
                </div>
            </section>
        );
    }
}

function mapStateToProps(state, props) {
        return {
            posts:state.posts,
            sortValue:state.sortValue,
        }
};

const mapDispatchToProps = dispatch => ({
    getPosts: (posts) => dispatch(actions.receivePosts(posts)),
    sortPosts: (sortValue) => dispatch(actions.sortPosts(sortValue))
});


export default connect(mapStateToProps, mapDispatchToProps)(PostSectionComponent);