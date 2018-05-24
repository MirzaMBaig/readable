export const RECEIVE_POST = 'RECEIVE_POST'
export const SORT_POST = 'SORT_POST'

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




