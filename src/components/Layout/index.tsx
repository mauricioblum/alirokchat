import React from 'react';
import Sidebar from '../Sidebar';
import TopMenu from '../TopMenu';

import { Container, Content } from './styles';

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Sidebar />
      <Content>
        <TopMenu />
        {children}
      </Content>
    </Container>
  );
};

export default Layout;
