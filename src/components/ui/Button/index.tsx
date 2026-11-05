'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  primary?: boolean;
  block?: boolean;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ primary, block, children, type = 'button', onClick }) => {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`py-2.5 px-8 rounded-full font-medium transition-colors outline-none focus:outline-none shadow-sm ${
        primary
          ? 'bg-[#B83280] text-white hover:bg-[#972969]'
          : 'border border-[#B83280] text-[#B83280] hover:bg-pink-50'
      } ${block ? 'w-full' : ''}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;
