import React from 'react';
import { Comment } from './comment';
import './style/list.scss';

export const CommentsList = ({ comments, handleDeleteComment, currentUser }) => {
  return (
    <ul className='list'>
      {
        !!comments?.comments &&
        comments.comments.map((comment, id) => {
          return <li key={id} className='list-item'>
            <Comment comment={comment} currentUser={currentUser} onDelete={handleDeleteComment}></Comment>
          </li>
        })
      }
    </ul>
  );
}