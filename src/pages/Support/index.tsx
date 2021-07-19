import React from 'react';
import ChatBox from '../../components/ChatBox';
import Layout from '../../components/Layout';

import { Container } from './styles';

const Support: React.FC = () => {
  return (
    <Layout>
      <Container>
        <ChatBox />
      </Container>
    </Layout>
  );
};

export default Support;
