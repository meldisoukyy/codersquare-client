import React, { useCallback, useState } from 'react';
import { addComment as addCommentRequest } from '../fetch';
import './style/add-comment.scss';

export const AddComment = ({ setModal, postId, refetch }) => {
  const [comment, setComment] = useState('');

  const addComment = useCallback(async (e) => {
    e.preventDefault();
    await addCommentRequest({ postId: postId, body: comment });
    setModal(false);
    refetch();
  }, [refetch, postId, comment, setModal])

  return (
    <form onSubmit={addComment} className="modal-add-comment">
      <textarea
        className={'comment-body input-field'}
        placeholder='Write your comment...'
        type={'text'}
        required
        onChange={e => setComment(e.target.value)}
      ></textarea>
      <button className='submit-button' type='submit'>Add Comment</button>
    </form>
  );
}