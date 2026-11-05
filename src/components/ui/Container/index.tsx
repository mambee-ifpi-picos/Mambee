import React from 'react';

interface ContainerProps {
  section?: boolean;
  className?: string;
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ section, className = '', children }) => (
  <div
    className={`flex flex-wrap max-w-screen-md w-full mx-auto p-5 ${
      section ? 'py-8 sm:py-16' : ''
    } ${className}`}
  >
    {children}
  </div>
);

export default Container;

