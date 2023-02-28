import React, { useState } from 'react';

import { login as loginRequest } from '../fetch'
export let AUTH = null;

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
    if (status === 200) {
      AUTH = `Bearer ${response.token}`;
    }
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