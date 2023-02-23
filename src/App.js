import React from 'react';
import { useQuery } from 'react-query';

import './App.css';
import { getPosts } from './fetch/client';

function App() {
  const { data, error, isLoading } = useQuery('test', getPosts);

  if (isLoading) return <h1>Loading... </h1>
  if (error) return <h1>There is an error.</h1>

  return (
    <div>
      Posts:
      <ul>
      {!!data?.posts && data.posts.map((post, i) => {
        return <li key={i}>{JSON.stringify(post.title)}</li>
      }
      )}
      </ul>
    </div>
  );
}

export default App;
