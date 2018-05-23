import { RECEIVE_POST } from "../actions/index";

export const posts = (state = {posts:[]}, action) => {
    switch (action.type) {
        case RECEIVE_POST:
            return {...state,
                posts:action.posts
            }
        default:
            return state
    }
}