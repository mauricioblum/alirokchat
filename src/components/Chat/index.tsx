import React from 'react';

import { Container } from './styles';

interface Message {
  id: string;
  author: string;
  date: Date;
  text: string;
}

interface ChatProps {
  messages: Message[];
}

const Chat: React.FC<ChatProps> = ({ messages }) => {
  return (
    <Container>
      <h1>Chat</h1>
    </Container>
  );
};

export default Chat;
