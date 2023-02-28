import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { viewPost } from '../fetch';

export const ViewPost = () => {
  const {id} = useParams();
  const {data, error, isLoading} = useQuery(['viewPost', id], () => viewPost(id));


  return (
    <>
      <h1>Hello World!</h1>
      <h2>My id is {id}</h2>
      <h3>{JSON.stringify(data)}</h3>
    </>
  );
}