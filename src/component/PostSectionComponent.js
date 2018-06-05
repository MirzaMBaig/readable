import React, { Component } from 'react';
import CategoryComponent from "./CategoryComponent";
import PostComponent from "./PostComponent";
import * as actions from "../actions/index";
import { connect } from "react-redux";
import { PostError } from './PostErrorComponent'

class PostSectionComponent extends Component {

    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        let posts = this.props.posts || [];
        let sortValue = this.props.sortValue;
        console.log(sortValue);
        console.log(posts.length > 0 ? posts[0] : 'no post');
        if (this.props.category) {
            posts = posts.filter(post => post.category === this.props.category)
        }
        return (
            <section className={"featured-posts no-padding-top"}>
                <div className={'my-2'}></div>
                <div className={"container"}>
                    {
                        <div className={"row"}>
                            <div className={"col"}>{posts.length > 0 &&
                                <h2>All posts {this.props.category && 'of category ' + this.props.category}</h2>}
                                {this.props.hasError && <PostError message='Error retriving posts' />}
                                {!posts.length && !this.props.hasError && <h2>Start writing new post</h2>}
                            </div>
                            <div className={"col"}>
                                <form className={"form-horizontal"}>
                                    <div className={"form-group row"}>
                                        <label htmlFor="post_sortBy" className={"col-6 col-form-label text-xl-right no-gutters"}>Sort
                                        by</label>
                                        <div className={"col-6"}>
                                            <select className={"custom-select custom-select-sm"} id="post_sortBy"
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
                    }
                </div>
                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"col-8"}>
                            {
                                posts && posts.map(post => <PostComponent key={post.id} post={post} />)
                            }
                        </div>
                        <CategoryComponent />
                    </div>
                </div>
            </section>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        posts: state.posts.posts,
        sortValue: state.sortValue,
        hasError: state.postsHaveError.errorRetrivingPost,
        isLoading: state.postAreLoading
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(actions.postsRetrieveData()),
        sortPosts: (sortValue) => dispatch(actions.sortPosts(sortValue))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(PostSectionComponent);