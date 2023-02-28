import { QueryClient } from "react-query";

import { ENDPOINTS, handleParam } from "./endpoints";

const API_HOST = 'http://localhost:3001'

export const queryClient = new QueryClient();

async function callEndPoint(endpoint, request) {
  const { url, method } = endpoint;
  const requestBody = request? JSON.stringify(request): undefined;

  const response = await fetch(`${API_HOST}${url}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('JWT')
    },
    body: requestBody
  })

  const status = response.status;

  const isJson = response.headers.get('content-type')?.includes('application/json');
  const jsonResponse = isJson? await response.json() : {}

  return {status: status, response: jsonResponse};
}

// USERS
export const signup = (user) => callEndPoint(ENDPOINTS.signup, user);
export const login  = (user) => callEndPoint(ENDPOINTS.login, user);
export const logout = () => localStorage.removeItem('JWT');

// POSTS
export const getPosts = () => callEndPoint(ENDPOINTS.listPosts);
export const addPost = (post) => callEndPoint(ENDPOINTS.addPost, post);
export const viewPost = (id) => callEndPoint(handleParam(id, ENDPOINTS.viewPost));
export const deletePost = (id) => callEndPoint(handleParam(id, ENDPOINTS.deletePost));

// Comments
export const getComments = (postId) => callEndPoint(handleParam(postId, ENDPOINTS.getComments));
export const addComment = (comment) => callEndPoint(ENDPOINTS.addComment, comment);
export const deleteComment = (id) => callEndPoint(handleParam(id, ENDPOINTS.deleteComment));

// LIKES
export const getLikes = (postId) => callEndPoint(handleParam(postId, ENDPOINTS.getLikes));
export const addLike = () => callEndPoint(ENDPOINTS.addLike);
export const deleteLike = (id) => callEndPoint(handleParam(id, ENDPOINTS.deleteLike));