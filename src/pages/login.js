import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { login as loginRequest } from '../fetch'
import { useTitle } from '../hooks/title';
import './style/login.scss'

export const Login = () => {
  useTitle('Login');

  const [user, setUser] = useState({
    emailOrUsername: null,
    password: null
  });
  const navigate = useNavigate();

  const updateUser = (e, id) => {
    const newUser = { ...user };
    newUser[id] = e.target.value;
    setUser(newUser);
  }

  const login = async (e) => {
    e.preventDefault();
    const { status, response } = await loginRequest(user);
    if (status === 200) {
      localStorage.setItem('JWT', `Bearer ${response.token}`);
      localStorage.setItem('CURRENT_USER', response.user.username);
      navigate('/');
    }
    else
      console.log(status, ':', response.msg)
  }

  return (
    <div className="container main">
      <div className="main-logo">
        <div className="logo">
        </div>
      </div>

      <div className="reg">
        <div className="reg-title">
          <div className="title">Welcome back to</div>
          <div><img className="logo" src={process.env.PUBLIC_URL+'/imgs/logo.svg'} alt=""></img></div>
        </div>

        <form onSubmit={login} className="reg-form">
          <input
            key={'emailOrUsername'}
            placeholder={'Email or Username'}
            type={'text'}
            required
            onChange={e => updateUser(e, 'emailOrUsername')}
          ></input>

          <input
            key={'password'}
            placeholder={'password'}
            type={'text'}
            required
            onChange={e => updateUser(e, 'password')}
          ></input>
          <button className="submit" type="submit">Login</button>
        </form>

        <div className="reg-route">
          Don't have an account?
          <button className="route" onClick={() => navigate('/user/signup')}>Sign up</button>
        </div>
      </div>
    </div>
  )
}