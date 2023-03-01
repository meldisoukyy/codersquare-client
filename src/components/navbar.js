import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style/navbar.scss';

export const Navbar = () => {
  const navigator = useNavigate();

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo" onClick={() => navigator('/')}>
          <img src={process.env.PUBLIC_URL+"/imgs/logo.svg"} alt=""></img>
        </div>

        <ul className="options">
          <li className="option wrap-text new-post">
            <i className="fa-solid fa-pen-to-square"></i>
            New Post
          </li>

          <li className="option wrap-text username">
            meldisoukyy (8)
          </li>

          <li className="option wrap-text sign-out">
            Sign out
          </li>
        </ul>

      </div>
    </div>
  );
}