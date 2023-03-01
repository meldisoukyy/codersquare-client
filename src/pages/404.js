import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style/404.scss';
import ERROR_SVG from './imgs/404-Error.svg';
import { useTitle } from '../hooks/title';

export const NotFound = () => {
  useTitle('404');
  const navigate = useNavigate();

  return (
    <div className='not-found-main-div'>
      <img
        className='not-found'
        src={ERROR_SVG}
        alt="404 - page not found!"
      ></img>
      <div className='main-text'>Oops! Page not found</div>
      <div className='sub-text'>The page you are trying to access does not exist or has been moved.</div>
      <div className='sub-text'>Try going back to our homepage. </div>

      <button
        className={"go-back logo-font main-text"}
        onClick={() => navigate('/')}
      >Go back to Codersquare</button>
    </div>
  );
}
