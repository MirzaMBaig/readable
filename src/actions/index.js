import * as BlogsAPI from "../server/BlogsAPI";

export const RECEIVE_POST = 'RECEIVE_POST'
export const ERROR_RECEIVE_POST = 'ERROR_RECEIVE_POST'
export const ERROR_SAVING_POST = 'ERROR_SAVING_POST'
export const LOADING_RECEIVE_POST = 'LOADING_RECEIVE_POST'
export const SORT_POST = 'SORT_POST'
export const CREATE_POST = 'CREATE_POST'
export const DELETE_POST = 'DELETE_POST'
export const FILTER_POST = 'FILTER_POST'
export const VOTE_POST = 'VOTE_POST'


export function postsRetrieveData() {
    return (dispatch) => {
        dispatch(loadingPosts(true));

        BlogsAPI.getPosts('posts')
            .then(posts => {
                dispatch(loadingPosts(false));
                dispatch(errorRetrievePosts(false))
                return posts;

            }).then((posts) => dispatch(receivePosts(posts)))
           .catch(() => {
               dispatch(errorRetrievePosts(true))
           });
    };
}

export function votePostOnServer(vote, id) {
    return (dispatch) => {
        BlogsAPI.votePost({ "option": vote }, id)
            .then(post => dispatch(votePost(post)));
    };
}

export function deletePostOnServer(post) {
    return (dispatch) => {
        console.log(post);
        BlogsAPI.deletePost(post.id)
            .then(p=> 
                dispatch(deletePost(post))
            );
    };
}

export const deletePost = (post) => {
    return {
        type: DELETE_POST,
        post,
    }
}
export const votePost = (post) => {
    return {
        type: VOTE_POST,
        post,
    }
}

export const receivePosts =  (posts) => {
    return {
        type: RECEIVE_POST,
        posts: posts,
    }

};

export const sortPosts =  (sortValue) => {
    return {
        type: SORT_POST,
        sortValue:sortValue,
    }
}

export const errorRetrievePosts =  (hasError) => {
    return {
        type: ERROR_RECEIVE_POST,
        hasError
    }
}

export const errorSavingPosts =  (hasError) => {
    return {
        type: ERROR_SAVING_POST,
        hasError
    }
}

export const loadingPosts =  (isLoading) => {
    return {
        type: LOADING_RECEIVE_POST,
        isLoading,
    }
}

export const createPost = (post) => {
    return {
        type: CREATE_POST,
        post,
    }
}


export const savePost =  (post) => {
    return (dispatch) => {
        BlogsAPI.savePost(post)
            .then(newPost => {
                return newPost;

            }).then((newPost) => dispatch(createPost(newPost)))
            .catch(() => {
                dispatch(errorSavingPosts(true))
            });
    };
}

export const filterPost =  (filter) => {
    return {
        type: FILTER_POST,
        filter,
    }
}




