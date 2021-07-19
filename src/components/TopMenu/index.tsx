import React from 'react';
import Logo from '../Logo';

import { Container, LogoContainer, Nav, NavMenu, NavItem } from './styles';

const TopMenu: React.FC = () => {
  return (
    <Container>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <Nav>
        <NavMenu>
          <NavItem>Statistics</NavItem>
          <NavItem isActive>Support</NavItem>
          <NavItem>Shipments</NavItem>
          <NavItem>Users</NavItem>
          <NavItem>Accounting</NavItem>
        </NavMenu>
      </Nav>
    </Container>
  );
};

export default TopMenu;
