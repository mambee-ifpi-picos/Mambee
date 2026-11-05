import React from 'react';
import Container from 'components/ui/Container';

const Footer: React.FC = () => (
  <footer className="border-t border-gray-200 py-6 mt-auto">
    <Container>
      <div className="flex items-center justify-center w-full space-x-6 text-sm">
        <a
          href="https://www.youtube.com/c/Mambee"
          rel="noreferrer noopener"
          target="_blank"
          className="text-indigo-900 hover:text-pink-700 transition-colors"
        >
          YouTube
        </a>
        <a
          href="https://www.instagram.com/mambeeifpi/"
          rel="noreferrer noopener"
          target="_blank"
          className="text-indigo-900 hover:text-pink-700 transition-colors"
        >
          Instagram
        </a>
        <a
          href="https://github.com/mambeeifpi"
          rel="noreferrer noopener"
          target="_blank"
          className="text-indigo-900 hover:text-pink-700 transition-colors"
        >
          GitHub
        </a>
      </div>
    </Container>
  </footer>
);

export default Footer;

