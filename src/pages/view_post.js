import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { addComment as addCommentRequest, deleteComment, getComments, viewPost } from '../fetch';

export const ViewPost = () => {
  const { id } = useParams();
  const postsQuery = useQuery(['viewPost', id], () => viewPost(id));
  const commentsQuery = useQuery([getComments, id], () => getComments(id));
  const [comment, setComment] = useState('');
  const postsData = postsQuery.data? postsQuery.data : undefined;
  const commentsData = commentsQuery.data? commentsQuery.data : und;

  const addComment = async (e) => {
    e.preventDefault();
    const { status, response } = await addCommentRequest({
      postId: id,
      body: comment
    })

    if (status === 200)
      window.location.reload(true);
    else
      console.log(status + ' : ' + response);
  }

  const handleDeleteComment = async (id) => {
    const { status, response } = await deleteComment(id)

    if (status === 200)
      window.location.reload(true);
    else
      console.log(status + ' : ' + response);
  }

  return (
    <>
      <h2 key={'postId'}>POST ID : {id}</h2>
      <h3 key={'postData'}>{JSON.stringify(postsData)}</h3>
      <hr></hr>
      <h2 key={'comments'}>POST COMMENTS: </h2>
      <ul key={'postComments'}>{
        !!commentsData?.response.comments &&
        commentsData.response.comments.map((comment, id) => {
          return <li key={id}>
            {comment.body}
            <button onClick={() => {handleDeleteComment(comment.id)}}>Delete Comment!</button>
          </li>
        })
      }</ul>
      <hr></hr>
      <h2 key={'addComment'}>Add Comment:</h2>
      <form onSubmit={addComment}>
        <input
          placeholder='comment'
          type={'text'}
          required
          onChange={e => setComment(e.target.value)}
        ></input>
        <button type='submit'>Add Comment!</button>
      </form>
    </>
  );
}