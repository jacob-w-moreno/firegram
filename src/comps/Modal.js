import React from 'react';
import { motion } from 'framer-motion';

const Modal = props => {

  const handleClick = e => {
    if (e.target.classList.contains('backdrop')) {
      props.setImage(null);
    }
  }

  return <motion.div className='backdrop' 
    onClick={handleClick}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    <motion.img src={props.image} alt="Enlarged"
      initial={{ y: "-100vh" }}
      animate={{ y: '0' }}
    />
  </motion.div>
}

export default Modal;