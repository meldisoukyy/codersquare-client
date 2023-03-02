import React, { useCallback} from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { deleteComment, getComments, viewPost } from '../fetch';
import { useTitle } from '../hooks/title';
import { CommentsList } from '../components/comments-list';
import { Navbar } from '../components/navbar';
import { PostCard } from '../components/post_card';

export const ViewPost = () => {
  useTitle('Post')
  const { id } = useParams();
  const { data: post, isLoading } = useQuery(['viewPost'], () => viewPost(id));
  const { data: comments, refetch } = useQuery(['getComments'], () => getComments(id));

  const handleDeleteComment = useCallback(async (id) => {
    await deleteComment(id);
    refetch();
  }, [refetch])

  return (
    <>
      <Navbar refetchComments={refetch} postId={id}></Navbar>
      <div className='container under-navbar'>
        {!isLoading && <PostCard post={post} postId={id}></PostCard>}
        <hr></hr>
        <CommentsList comments={comments} handleDeleteComment={handleDeleteComment} currentUser={localStorage.getItem('CURRENT_USER')}></CommentsList>
      </div>
    </>
  );
}