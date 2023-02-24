import { QueryClient } from "react-query";

import { ENDPOINTS } from "./endpoints";

const API_HOST = 'http://localhost:3001'
const AUTH = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ5MDA5YjM0LTEwMzktNDNjZC1iNmUzLWQwM2E1OTU0MGU1ZiIsImlhdCI6MTY3NzExMjEwMiwiZXhwIjoxNjc5NzA0MTAyfQ.BACwWwU_46o9n4EgBEOXnSHLtyLyIsbpZSFfwzsh1yU';

export const queryClient = new QueryClient();

async function fetchData(endpoint, request) {
  const { url, method } = endpoint;
  const requestBody = request? JSON.stringify(request): undefined;

  const response = await fetch(`${API_HOST}${url}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': AUTH
    },
    body: requestBody
  })

  return await response.json();
}

// USERS
export const signup = async (username, email, firstName, lastName, password) => await fetchData(ENDPOINTS.signup,
  {username, email, firstName, lastName, password}
)

// POSTS
export const getPosts = () => fetchData(ENDPOINTS.listPosts)