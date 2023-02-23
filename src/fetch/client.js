import { QueryClient } from "react-query";

export const queryClient = new QueryClient();

export async function getPosts() {
  const response = await fetch('http://localhost:3001/posts', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ5MDA5YjM0LTEwMzktNDNjZC1iNmUzLWQwM2E1OTU0MGU1ZiIsImlhdCI6MTY3NzExMjEwMiwiZXhwIjoxNjc5NzA0MTAyfQ.BACwWwU_46o9n4EgBEOXnSHLtyLyIsbpZSFfwzsh1yU'
    }
  })

  return await response.json()
}
