export const ENDPOINTS = {
  // USERS
  signup: {url: '/users/signup', method:'POST'},
  login: {url: '/users/login', method: 'POST'},
  logout: {url: '/users/logout', method: 'GET'},

  // POSTS
  listPosts: {url: '/posts', method: 'GET'},
  addPost: {url: '/posts', method:'POST'}
}