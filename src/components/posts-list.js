import React from 'react';
import { PostCard } from './post_card';
import './style/list.scss';

export const PostsList = ({ posts, refetch }) => {
  return (
    <ul className='list'>
      {
        !!posts?.posts && posts.posts.map((post, i) => {
          return (
            <li key={i} className='list-item'>
              <PostCard post={post} refetch={refetch} postId={post.id}></PostCard>
            </li>
          )
        })
      }
    </ul>
  );
}