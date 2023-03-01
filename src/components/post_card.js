import React, { useCallback } from 'react';
import formatDistance from 'date-fns/formatDistance';

import './style/post_card.scss'
import { addLike as addLikeRequest, deleteLike as deleteLikeRequest, getComments, getLikes } from '../fetch';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

export const PostCard = ({ post }) => {
  const navigator = useNavigate();
  const { isLiked, likesCount, refetch } = useLikesInfo(post.id);
  const { commentsCount } = useCommentInfo(post.id);

  const viewPost = useCallback(async (e) => {
    e.stopPropagation();
    navigator('/post/'+post.id);
  }, [navigator, post.id])

  const toggleLike = useCallback(async (e) => {
    e.stopPropagation();
    if (!!isLiked) {
      await deleteLikeRequest(post.id);
    } else {
      await addLikeRequest({ "postId": post.id });
    }
    refetch();
  }, [refetch, isLiked, post.id])

  return (
    <div className={"card"} onClick={viewPost}>
      <div className="like-button" onClick={toggleLike}>
        <i className={`like-icon ${isLiked ? "fa-solid" : "fa-regular"} fa-heart`}></i>
      </div>

      <div className="title wrap-text">
        {post.title}
      </div>

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