import React from 'react';
import { useQuery } from 'react-query';

import { getPosts } from '../fetch/client';

export const ListPosts = () => {
  const { data, error, isLoading } = useQuery(['listPosts'], getPosts);

  if (isLoading) return <h1>Loading... </h1>
  if (error) return <h1>There is an error.</h1>

  return (
    <div>
      Posts:
      <ul>
        {
          !!data?.posts && data.posts.map((post, i) => {
            return <li key={i}>{JSON.stringify(post.title)}</li>
          }
          )
        }
      </ul>
    </div>
  );
}