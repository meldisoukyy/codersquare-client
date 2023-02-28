import React, { useState } from 'react';

import { signup as signupRequest} from '../fetch'
import { useTitle } from '../hooks/title';

export const Signup = () => {
  useTitle('Signup');

  const [user, setUser] = useState({
    username: null,
    email: null,
    firstName: null,
    lastName: null,
    password: null
  })

  const updateUser = (e, id) => {
    const newUser = { ...user }
    newUser[id] = e.target.value;
    setUser(newUser)
  }

  const signup = async (e) => {
    e.preventDefault();
    const { status, response } = await signupRequest(user);
    if (status === 200)
      console.log('Success')
    else
      console.log(status, ':', response.msg)
  }

  return (
    <form onSubmit={signup}>
      <input
        key={'username'}
        placeholder={'username'}
        type={'text'}
        required
        onChange={e => updateUser(e, 'username')}
      ></input>

      <input
        key={'email'}
        placeholder={'email'}
        type={'text'}
        required
        onChange={e => updateUser(e, 'email')}
      ></input>

      <input
        key={'firstName'}
        placeholder={'firstName'}
        type={'text'}
        required
        onChange={e => updateUser(e, 'firstName')}
      ></input>

      <input
        key={'lastName'}
        placeholder={'lastName'}
        type={'text'}
        required
        onChange={e => updateUser(e, 'lastName')}
      ></input>

      <input
        key={'password'}
        placeholder={'password'}
        // type={'password'}
        required
        onChange={e => updateUser(e, 'password')}
      ></input>

      <button type='submit'>Submit</button>
    </form>
  );
}