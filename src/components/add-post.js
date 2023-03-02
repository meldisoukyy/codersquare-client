import React, { useCallback, useState } from 'react';
import { addPost as addPostRequest } from '../fetch';
import './style/add-post.scss';

export const AddPost = ({ setModal, refetch }) => {
  const [post, setPost] = useState({
    title: null,
    body: null
  });

  const addPost = useCallback(async (e) => {
    e.preventDefault();
    await addPostRequest(post);
    setModal(false);
    refetch();
  }, [setModal, post, refetch])

  return (
    <form onSubmit={addPost} className="modal-add-post">
      <input
        className={'post-title input-field'}
        placeholder={'Post Title'}
        type={'text'}
        required
        onChange={e => setPost({ ...post, title: e.target.value })}
      ></input>
      <textarea
        className={'post-body input-field'}
        placeholder={'Post Body'}
        required
        onChange={e => setPost({ ...post, body: e.target.value })}
      ></textarea>
      <button className='submit-button' type='submit'>Add Post</button>
    </form>
  );
}