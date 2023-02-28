import { QueryClient } from "react-query";

import { ENDPOINTS } from "./endpoints";

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
export const getPosts = () => callEndPoint(ENDPOINTS.listPosts)
export const addPost = (post) => callEndPoint(ENDPOINTS.addPost, post)