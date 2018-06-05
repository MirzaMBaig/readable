import * as BlogsAPI from "../server/BlogsAPI";

export const RECEIVE_POST = 'RECEIVE_POST'
export const ERROR_RECEIVE_POST = 'ERROR_RECEIVE_POST'
export const ERROR_SAVING_POST = 'ERROR_SAVING_POST'
export const LOADING_RECEIVE_POST = 'LOADING_RECEIVE_POST'
export const SORT_POST = 'SORT_POST'
export const CREATE_POST = 'CREATE_POST'
export const FILTER_POST = 'FILTER_POST'


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




