export const ENDPOINTS = {
  // USERS
  signup: { url: '/users/signup', method: 'POST' },
  login: { url: '/users/login', method: 'POST' },
  logout: { url: '/users/logout', method: 'GET' },

  // POSTS
  listPosts: { url: '/posts', method: 'GET' },
  addPost: { url: '/posts', method: 'POST' },
  viewPost: { url: '/posts/:id', method: 'GET' }
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