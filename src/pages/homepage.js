import React from 'react';
import { useQuery } from 'react-query';

import { getPosts } from '../fetch';
import { useTitle } from '../hooks/title';
import { PostsList } from '../components/posts-list';
import { Navbar } from '../components/navbar';

export const Homepage = () => {
  useTitle('Home');

  const { data: posts, refetch } = useQuery(['listPosts'], getPosts);

  return (
    <div>
      <Navbar refetchPosts={refetch}></Navbar>
      <div className='under-navbar container'>
        <PostsList posts={posts} refetch={refetch}></PostsList>
      </div>
    </div >
  );
}