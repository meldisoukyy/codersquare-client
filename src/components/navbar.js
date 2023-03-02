import React, { useCallback, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AddComment } from './add-comment';
import { AddPost } from './add-post';
import { Modal } from './modal';
import './style/navbar.scss';

export const Navbar = ({ refetchPosts, refetchComments, postId }) => {
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
              location.pathname === '/' ?
                <AddPost setModal={setModal} refetch={refetchPosts}></AddPost> :
                <AddComment setModal={setModal} refetch={refetchComments} postId={postId}></AddComment>
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

