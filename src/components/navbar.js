import React, { useCallback, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AddPost } from './add-post';
import { Modal } from './modal';
import './style/navbar.scss';

export const Navbar = ({ refetchPosts }) => {
  const location = useLocation();
  const navigator = useNavigate();
  const [modal, setModal] = useState(false);
  const currentUser = localStorage.getItem('CURRENT_USER');

  const handleLogout = useCallback(() => {
    localStorage.removeItem('JWT');
    localStorage.removeItem('CURRENT_USER');
    navigator('/user/login');
  }, [navigator])

  return (
    <div className="navbar">
      <div className="container">
        {!!modal &&
          <Modal
            setModal={setModal}
            content={
              location.pathname === '/' ? <AddPost setModal={setModal} refetch={refetchPosts}></AddPost> : 'New Comment'
            }
          ></Modal>
        }

        <div className="logo" onClick={() => navigator('/')}>
          <img src={process.env.PUBLIC_URL + "/imgs/logo.svg"} alt=""></img>
        </div>

        <ul className="options">
          <li className="option wrap-text new-post" onClick={() => setModal(!modal)}>
            <i className="fa-solid fa-pen-to-square"></i>
            {location.pathname === '/' && 'New Post'}
            {location.pathname.match('/post') && 'New Comment'}
          </li>

          <li className="option wrap-text username">
            {currentUser}
          </li>

          <li className="option wrap-text sign-out" onClick={handleLogout}>
            Sign out
          </li>
        </ul>

      </div>
    </div >
  );
}

