const api = "http://localhost:3001"


let token = 'whatever-you-want';

const headers = {
    'Accept': 'application/json',
    'Authorization': token
}

export const getCategories = () =>
    fetch(`${api}/categories`, {headers})
        .then(res => res.json())
        .then(data => data.categories)

export const getComments = (id) =>
    fetch(`${api}/posts/${id}/comments`, {headers})
        .then(res => res.json())
        .then(data => data)

export const getPost = (id) => {
    if (id)
        return fetch(`${api}/posts/${id}`, {headers})
            .then(res => res.json())
            .then(data => data);
}


export const getPosts = (urlString) => {
    return fetch(`${api}/${urlString}`, {headers})
        .then(res => res.json())
        .then(data => data);

}

export const search = (query) =>
    fetch(`${api}/search`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({query})
    }).then(res => res.json())
        .then(data => data.books)

export const saveOrUpdateComment = (comment) => {
    return fetch(`${api}/comments`, {
        method: comment.isEditing ? 'PUT' : 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment)
    }).then(res => res.json())
        .then(data => data)
}

export const savePost = (post) => {
    return fetch(`${api}/posts`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    }).then(res => res.json())
        .then(data => data)
}

export const deletePost = (id) => {
    console.log("delete");
    console.log(id);
    console.log(typeof id === 'string');
    if (id === undefined || id === 'undefined') {
        return;
    }
    console.log('deleting....');
    console.log(id);

    return fetch(`${api}/posts/${id}`, {
        method: 'DELETE',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
    }).then(res => res.json())
        .then(data => data)

}

export const deleteComment = (id) => {
    console.log("delete");
    console.log(id);
    console.log(typeof id === 'string');
    if (id === undefined || id === 'undefined') {
        return;
    }
    console.log('deleting....');
    console.log(id);

    return fetch(`${api}/comments/${id}`, {
        method: 'DELETE',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
    }).then(res => res.json())
        .then(data => data)

}
