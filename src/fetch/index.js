import { QueryClient } from "react-query";

import { ENDPOINTS, handleParam } from "./endpoints";

const API_HOST = 'http://localhost:3001'

export const queryClient = new QueryClient();

async function callEndPoint(endpoint, request) {
  const { url, method } = endpoint;
  const requestBody = request ? JSON.stringify(request) : undefined;

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
  const jsonResponse = isJson ? await response.json() : {}

  return { status: status, response: jsonResponse };
}

// USERS
export const signup = (user) => callEndPoint(ENDPOINTS.signup, user);
export const login = (user) => callEndPoint(ENDPOINTS.login, user);
export const logout = () => localStorage.removeItem('JWT');

// POSTS
export const getPosts = async () => {
  const { status, response } = await callEndPoint(ENDPOINTS.listPosts);
  if (status === 200)
    return response;
  return console.log("SHIT!: getPosts");
}
export const addPost = async (post) => {
  const { status, response } = await callEndPoint(ENDPOINTS.addPost, post);
  if (status === 200)
    return response;
  return console.log("SHIT!: addPost");
}
export const viewPost = async (id) => {
  const { response, status } = await callEndPoint(handleParam(id, ENDPOINTS.viewPost));
  if (status === 200)
    return response;
  return console.log("SHIT!: viewPost");
}

export const deletePost = (id) => callEndPoint(handleParam(id, ENDPOINTS.deletePost));

// Comments
export const getComments = async (postId) => {
  const { status, response } = await callEndPoint(handleParam(postId, ENDPOINTS.getComments));
  if (status === 200)
    return response;
  return console.log("SHIT!: getComments");
}

export const addComment = async (comment) => {
  const { status, response } = await callEndPoint(ENDPOINTS.addComment, comment);
  if (status === 200)
    return response;
  return console.log("SHIT!: addComment");
}

export const deleteComment = (id) => callEndPoint(handleParam(id, ENDPOINTS.deleteComment));

// LIKES
export const getLikes = async (postId) => {
  const { status, response } = await callEndPoint(handleParam(postId, ENDPOINTS.getLikes));
  if (status === 200)
    return response
  return console.error("SHIT!");
}

export const addLike = (id) => callEndPoint(ENDPOINTS.addLike, id);
export const deleteLike = (id) => callEndPoint(handleParam(id, ENDPOINTS.deleteLike));