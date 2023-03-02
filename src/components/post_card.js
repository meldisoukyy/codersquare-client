import React, { useCallback } from 'react';
import formatDistance from 'date-fns/formatDistance';

import './style/post_card.scss'
import { addLike as addLikeRequest, deleteLike as deleteLikeRequest, deletePost, getComments, getLikes } from '../fetch';
import { useQuery } from 'react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import ShowMoreText from "react-show-more-text";

export const PostCard = ({ post, postId }) => {
  const navigator = useNavigate();
  const location = useLocation();
  const { isLiked, likesCount, refetch } = useLikesInfo(postId);
  const { commentsCount } = useCommentInfo(postId);
  const currentUser = localStorage.getItem('CURRENT_USER');

  const viewPost = useCallback(async (e) => {
    e.stopPropagation();
    navigator('/post/' + postId);
  }, [navigator, postId])

  const toggleLike = useCallback(async (e) => {
    e.stopPropagation();
    if (!!isLiked) {
      await deleteLikeRequest(postId);
    } else {
      await addLikeRequest({ "postId": postId });
    }
    refetch();
  }, [refetch, isLiked, postId])

  const handleDeletePost = useCallback(async (id) => {
    await deletePost(id);
    navigator('/');
  }, [refetch, navigator])

  return (
    <div className={"card"} onClick={viewPost}>
      <div className="like-button" onClick={toggleLike}>
        <i className={`like-icon ${isLiked ? "fa-solid" : "fa-regular"} fa-heart`}></i>
      </div>

      <div className="title wrap-text">
        {post.title}
      </div>

      {location.pathname !== '/' &&
        <ShowMoreText
          lines={3}
          more="show more"
          less="show less"
          className='post-details'
          anchorClass='anchor'
        >
          {post.body}
        </ShowMoreText>
      }

      <div className="meta-data">
        <div className="likes wrap-text">{likesCount} likes</div>
        <div className="spliter">|</div>
        <div className="username wrap-text">
          {post.postAuthor.username}
        </div>
        <div className="spliter">|</div>
        <div className="comments wrap-text">
          {commentsCount} Comments
        </div>
        <div className="spliter">|</div>
        <div className="time wrap-text">
          {formatDistance(new Date(post.createdAt), Date.now(), { addSuffix: true })}
        </div>
        {currentUser === post.postAuthor.username &&
          <>
            <div className="spliter">|</div>
            <button className='delete-button' onClick={() => { handleDeletePost(postId) }}>Delete Post!</button>
          </>
        }
      </div>
    </div>
  );
}

const useLikesInfo = (postId) => {
  const { data, refetch } = useQuery(['getLikes', postId], () => getLikes(postId));

  return {
    likesCount: data?.count,
    isLiked: data?.isLiked,
    refetch
  }
}

const useCommentInfo = (postId) => {
  const { data } = useQuery(['getComments', postId], () => getComments(postId));

  return {
    commentsCount: data?.comments.length
  }
}