import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { signup as signupRequest } from '../fetch'
import { useTitle } from '../hooks/title';
import './style/login.scss';

export const Signup = () => {
  useTitle('Signup');
  const navigate = useNavigate();

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
    if (status === 200){
      navigate('/user/login');
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
          <div className="title">Welcome to</div>
          <div><img className="logo" src="/imgs/logo.svg" alt=""></img></div>
        </div>

        <form onSubmit={signup} className="reg-form">
          <div className="name">
            <input
              key={'firstName'}
              placeholder={'First Name'}
              type={'text'}
              required
              onChange={e => updateUser(e, 'firstName')}
            ></input>

            <input
              key={'lastName'}
              placeholder={'Last Name'}
              type={'text'}
              required
              onChange={e => updateUser(e, 'lastName')}
            ></input>
          </div>

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
            key={'password'}
            placeholder={'password'}
            // type={'password'}
            required
            onChange={e => updateUser(e, 'password')}
          ></input>

          <button type='submit'>Submit</button>

        </form>

        <div className="reg-route">
          Have an account already?
          <button className="route" onClick={() => navigate('/user/login')}>Login</button>
        </div>
      </div>
    </div>
  );
}