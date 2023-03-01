import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

import { getPosts, addPost as addPostRequest, deletePost} from '../fetch';
import { useTitle } from '../hooks/title';

export const Homepage = () => {
  useTitle('Home');

  const [post, setPost] = useState({
    title: null,
    body: null
  });
  const  {data} = useQuery(['listPosts'], getPosts);
  const { response } = data ? data : { response: null };

  const addPost = async (e) => {
    e.preventDefault();
    const { response, status } = await addPostRequest(post);
    if (status === 200)
      window.location.reload(true)
    else
      console.log(status + ' ' + response.msg);
  }

  const handleDeletePost = async (postId) => {
    const {response, status} = await deletePost(postId);
    if (status === 200)
      window.location.reload(true);
    else
      console.log(status + ' ' + response.msg);
  }

  return (
    <div>
      <div>ADD POST:</div>
      <form onSubmit={addPost}>
        <input
          key={'title'}
          placeholder={'title'}
          type={'text'}
          required
          onChange={e => setPost({ ...post, title: e.target.value })}
        ></input>
        <input
          key={'body'}
          placeholder={'body'}
          type={'text'}
          required
          onChange={e => setPost({ ...post, body: e.target.value })}
        ></input>
        <button type='submit'>Add Post</button>
      </form>
      <div>POSTS:</div>
      <ul>
        {
          !!response?.posts && response.posts.map((post, i) => {
            return <li key={i}>
              <Link to={`/post/${post.id}`}>
                {JSON.stringify(post.title)}
              </Link>
              <button onClick={() => handleDeletePost(post.id)}>Delete</button>
            </li>
          })
        }
      </ul>
    </div >
  );
}