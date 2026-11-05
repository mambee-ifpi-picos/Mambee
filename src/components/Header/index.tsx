import React from 'react';
import MainNav from './MainNav';
import Logo from './Logo';
import Container from 'components/ui/Container';

interface HeaderProps {
  siteTitle?: string;
}

const Header: React.FC<HeaderProps> = () => (
  <header className="bg-gray-100 border-b border-gray-200 -mb-px">
    <Container className="items-center">
      <Logo />
      <MainNav />
    </Container>
  </header>
);

export default Header;

