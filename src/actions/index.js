export const RECEIVE_POST = 'RECEIVE_POST'

export const receivePosts =  (posts) => {
    return {
        type: RECEIVE_POST,
        posts: posts,
    }
}




