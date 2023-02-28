import React from 'react';
import { useQuery } from 'react-query';

import { getPosts } from '../fetch/';

export const ListPosts = () => {
  const { data, error, isLoading } = useQuery(['listPosts'], getPosts);
  const { response } = data? data: {response:null};

  if (isLoading) return <h1>Loading... </h1>
  if (error) return <h1>There is an error.</h1>

  return (
    <div>
      <ul>
        {
          !!response?.posts && response.posts.map((post, i) => {
            return <li key={i}>{JSON.stringify(post.title)}</li>
          })
        }
      </ul>
    </div>
  );
}