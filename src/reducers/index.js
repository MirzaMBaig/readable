import { combineReducers } from 'redux';
import { posts, postAreLoading, postsHaveError } from './posts';

export default combineReducers({
    posts,
    postAreLoading,
    postsHaveError
});