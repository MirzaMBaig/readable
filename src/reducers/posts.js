import { RECEIVE_POST, SORT_POST, ERROR_RECEIVE_POST, LOADING_RECEIVE_POST, CREATE_POST, ERROR_SAVING_POST } from "../actions/index";

const sortBy = require('sort-by')

export const posts = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_POST:
            return {
                ...state,
                posts: action.posts.sort(sortBy('-voteScore')),
            };
        case SORT_POST:
            let postsToSort = state.posts.slice();
            return {
                ...state,
                posts: postsToSort.sort(sortBy('-' + action.sortValue)),
                sortValue: action.sortValue,
            };
        case CREATE_POST:
            let postsToAdd = state.posts.slice();
            postsToAdd.push(action.post);
            return {
                ...state,
                posts: postsToAdd,
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