import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { login as loginRequest } from '../fetch'
import { useTitle } from '../hooks/title';

export const Login = () => {
  useTitle('Login');

  const [user, setUser] = useState({
    emailOrUsername: null,
    password: null
  });
  const navigate = useNavigate();

  const changeUser = (e, id) => {
    const newUser = { ...user };
    newUser[id] = e.target.value;
    setUser(newUser);
  }

  const login = async (e) => {
    e.preventDefault();
    const { status, response } = await loginRequest(user);
    if (status === 200) {
      localStorage.setItem('JWT',`Bearer ${response.token}`);
      navigate('/home');
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