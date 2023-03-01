import React from 'react';
import ShowMoreText from "react-show-more-text";
import './style/comments.scss';
import { formatDistance } from 'date-fns';

export const Comment = ({ comment, currentUser, onDelete }) => {
  return (
    <div>
      <ShowMoreText
        lines={3}
        more="show more"
        less="show less"
        className='comment'
        anchorClass='anchor'
      >
        {comment.body}
      </ShowMoreText>

      <div
        className='meta-data'
      >
        created by
        <div className="username wrap-text">
          {comment.commentAuthor.username}
        </div>
        <div className="spliter">|</div>
        <div className="time wrap-text">
          {formatDistance(new Date(comment.createdAt), Date.now(), { addSuffix: true })}
        </div>
        {currentUser === comment.commentAuthor.username &&
          <>
            <div className="spliter">|</div>
            <button className='delete-button' onClick={() => { onDelete(comment.id) }}>Delete Comment!</button>
          </>
        }
      </div>
    </div>
  );
}