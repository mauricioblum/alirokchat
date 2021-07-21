import React from 'react';
import { ChatData } from '../../services/models';

import {
  Container,
  MessageBox,
  MessageContainer,
  MessageDate,
  MessageText,
  UserImage,
} from './styles';

interface ChatProps {
  messages: ChatData[];
}

const Chat: React.FC<ChatProps> = ({ messages }) => {
  return (
    <Container>
      {messages.map((message) => (
        <MessageContainer
          key={message.id}
          messageAlign={message.id % 2 !== 0 ? 'left' : 'right'}
        >
          <MessageDate>
            {new Date(message.created_at).toLocaleDateString()}
          </MessageDate>
          <MessageBox messageAlign={message.id % 2 !== 0 ? 'left' : 'right'}>
            <UserImage
              src={`https://i.pravatar.cc/150?u=${message.user_uuid}`}
            />
            <MessageText>{message.text}</MessageText>
          </MessageBox>
        </MessageContainer>
      ))}
    </Container>
  );
};

export default Chat;
