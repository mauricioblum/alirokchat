import React from 'react';

import {
  Container,
  MessageBox,
  MessageContainer,
  MessageDate,
  MessageText,
  UserImage,
} from './styles';

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
      <MessageContainer messageAlign="left">
        <MessageDate>Jul 2, 2021 9:52 pm</MessageDate>
        <MessageBox messageAlign="left">
          <UserImage src="https://picsum.photos/50/50" />
          <MessageText>
            Hi, yes, the revised documents need to be delivered today before 5pm
          </MessageText>
        </MessageBox>
      </MessageContainer>
      <MessageContainer messageAlign="right">
        <MessageDate>Jul 2, 2021 9:55 pm</MessageDate>
        <MessageBox messageAlign="right">
          <UserImage src="https://picsum.photos/50/51" />
          <MessageText>Ok, working on it , thanks</MessageText>
        </MessageBox>
      </MessageContainer>
    </Container>
  );
};

export default Chat;
