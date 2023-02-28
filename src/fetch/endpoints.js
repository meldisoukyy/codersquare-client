export const ENDPOINTS = {
  // USERS
  signup: { url: '/users/signup', method: 'POST' },
  login: { url: '/users/login', method: 'POST' },
  logout: { url: '/users/logout', method: 'GET' },

  // POSTS
  listPosts: { url: '/posts', method: 'GET' },
  addPost: { url: '/posts', method: 'POST' },
  viewPost: { url: '/posts/:id', method: 'GET' },
  deletePost: { url: '/posts/:id', method: 'DELETE' },

  // COMMENTS
  addComment: { url: '/comments', method: 'POST' },
  getComments: { url: '/comments/:postId', method: 'GET' },
  deleteComment: { url: '/comments/:id', method: 'DELETE' },

  // LIKES
  addLike: {url: '/likes', method: 'POST'},
  getLikes: {url: '/likes/:postId', method: 'GET'},
  deleteLike: {url: '/likes/:postId', method: 'DELETE'}
}

export const handleParam = (param, endpoint) => {
  let newUrl = endpoint.url;
  const placeholder = newUrl.match(/:[^\/]*/g) || undefined;

  newUrl = newUrl.replace(placeholder, param);
  return {
    ...endpoint,
    url: newUrl
  }
}