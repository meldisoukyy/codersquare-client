import React from 'react';
import './style/modal.scss';

export const Modal = ({ content, setModal }) => {
  return (
    <div className='modal'>
      <div className='overlay' onClick={() => setModal(false)}></div>
      <div className='modal-content'>{content}</div>
    </div>
  );
}