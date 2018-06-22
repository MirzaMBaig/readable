import { RECEIVE_POST, SORT_POST, ERROR_RECEIVE_POST, LOADING_RECEIVE_POST, CREATE_POST, DELETE_POST, VOTE_POST,  ERROR_SAVING_POST } from "../actions/index";

const sortBy = require('sort-by')

export const posts = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_POST:
            return {
                ...state,
                posts: action.posts.sort(sortBy('-voteScore')),
            };
        case SORT_POST:
            let postsToSort = state.posts && state.posts.slice();
            return {
                ...state,
                posts: postsToSort.sort(sortBy('-' + action.sortValue)),
                sortValue: action.sortValue,
            };
        case CREATE_POST:
            let postsToAdd = state.posts && state.posts.slice();
            return {
                ...state,
                addedPost: action.post,
                posts: postsToAdd.push(action.post),
            };
        case DELETE_POST:
            let removedPost = state.posts && state.posts.filter(post => action.post.id !== post.id);
            return {
                ...state,
                posts: removedPost,
            };
        case VOTE_POST:
            let updateotePost = state.posts && state.posts.map(post => {
                if(action.post.id === post.id){
                    return action.post;
                }
                return post;
            });
            return {
                ...state,
                posts: updateotePost,
            };
        default:
            return state
    }
}

export function postsHaveError(state = false, action) {
    switch (action.type) {
        case ERROR_RECEIVE_POST:
            return {
                errorRetrivingPost: action.hasError
            }
        case ERROR_SAVING_POST:
            return {
                errorSavingPost:action.hasError
            }
        default:
            return state;
    }
}

export function postAreLoading(state = false, action) {
    switch (action.type) {
        case LOADING_RECEIVE_POST:
            return action.isLoading;
        default:
            return state;
    }
}