import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: '0px 0px 8px #ddd',
    boxShadow: '0px 0px 8px #ddd',
    transition: {
      duration: 0.4,
      yoyo: Infinity
    }
  },
};

const Home = () => {
  return (
    <motion.div
      className="home container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1.5 }}
    >
      <h2>Bienvenidos a Pizza Joint</h2>
      <Link to="/base">
        <motion.button
          variants={buttonVariants}
          animate="visible"
          whileHover="hover"
        >
          Diseña Tu Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
