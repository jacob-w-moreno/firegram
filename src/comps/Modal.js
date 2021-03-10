import React from 'react';

const Modal = props => {

  const handleClick = e => {
    if (e.target.classList.contains('backdrop')) {
      props.setImage(null);
    }
  }

  return <div className='backdrop' onClick={handleClick}>
    <img src={props.image} alt="Enlarged picture"/>
  </div>
}

export default Modal;