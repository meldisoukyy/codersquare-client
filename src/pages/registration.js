import React, { useState } from 'react';

import { signup as signupRequest, login as loginRequest } from '../fetch'
export let AUTH = null;

const Signup = () => {
  const [user, setUser] = useState({
    username: null,
    email: null,
    firstName: null,
    lastName: null,
    password: null
  })

  const changeUser = (e, id) => {
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
        onChange={e => changeUser(e, 'username')}
      ></input>

      <input
        key={'email'}
        placeholder={'email'}
        type={'text'}
        required
        onChange={e => changeUser(e, 'email')}
      ></input>

      <input
        key={'firstName'}
        placeholder={'firstName'}
        type={'text'}
        required
        onChange={e => changeUser(e, 'firstName')}
      ></input>

      <input
        key={'lastName'}
        placeholder={'lastName'}
        type={'text'}
        required
        onChange={e => changeUser(e, 'lastName')}
      ></input>

      <input
        key={'password'}
        placeholder={'password'}
        // type={'password'}
        required
        onChange={e => changeUser(e, 'password')}
      ></input>

      <button type='submit'>Submit</button>
    </form>
  );
}

const Login = () => {
  const [user, setUser] = useState({
    emailOrUsername: null,
    password: null
  })

  const changeUser = (e, id) => {
    const newUser = { ...user };
    newUser[id] = e.target.value;
    setUser(newUser);
  }

  const login = async (e) => {
    e.preventDefault();
    const { status, response } = await loginRequest(user);
    if (status === 200)
      AUTH = `Bearer ${response.token}`;
    else
      console.log(status, ':', response.msg)
  }

  return (
    <form onSubmit={login}>
      <input
        key={'emailOrUsername'}
        placeholder={'Email or Username'}
        type={'text'}
        required
        onChange={e => changeUser(e, 'emailOrUsername')}
      ></input>

      <input
        key={'password'}
        placeholder={'password'}
        type={'text'}
        required
        onChange={e => changeUser(e, 'password')}
      ></input>

      <button type='submit'>Submit</button>
    </form>
  )
}

export const Registration = () => {
  return (
    // <Signup></Signup>
    <Login></Login>
  );
}