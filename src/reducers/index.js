import { RECEIVE_POST, SORT_POST } from "../actions/index";

const sortBy = require('sort-by')

const initialState = {
    posts: [],
    sortValue: 'voteScore',
};

export const posts = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_POST:
            return {
                ...state,
                posts: action.posts.sort(sortBy('-' + state.sortValue)),
            };
        case SORT_POST:
            return {
                ...state,
                posts: state.posts.sort(sortBy('-' + action.sortValue || state.sortValue)),
                sortValue: action.sortValue || state.sortValue,
            }
        default:
            return state
    }
}