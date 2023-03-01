import React, { useState } from 'react';

import './style/post_card.scss'

export const PostCard = ({ postId, post }) => {
  const [isClicked, setClicked] = useState(false)
  return (
    <div className={isClicked?"card on-click":"card"} onClick={e => setClicked(!isClicked)}>
      <div className="like-button">
        <i className="like-icon fa-regular fa-heart"></i>
      </div>

      <div className="title wrap-text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis dicta sunt voluptatibus id qui libero quae
      </div>

      <div className="meta-data">
        <div className="likes">11 likes</div>
        <div className="spliter">|</div>
        <div className="username wrap-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis dicta sunt voluptatibus id qui libero quae
        </div>
        <div className="spliter">|</div>
        <div className="time">3 hours ago</div>
      </div>
      {!!isClicked && <div className="body">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis dicta sunt voluptatibus id qui libero quae
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis dicta sunt voluptatibus id qui libero quae
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis dicta sunt voluptatibus id qui libero quae
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis dicta sunt voluptatibus id qui libero quae
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis dicta sunt voluptatibus id qui libero quae
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis dicta sunt voluptatibus id qui libero quae
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis dicta sunt voluptatibus id qui libero quae
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis dicta sunt voluptatibus id qui libero quae
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis dicta sunt voluptatibus id qui libero quae
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis dicta sunt voluptatibus id qui libero quae
      </div>}
    </div>
  );
}