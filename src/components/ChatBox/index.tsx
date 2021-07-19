import React from 'react';
import Dropdown from '../Dropdown';
import MessageList from '../MessageList';
import Search from '../Search';

import {
  Container,
  Conversations,
  DropdownContainer,
  SearchContainer,
  MessagesContainer,
  ChatContainer,
  TrackingContainer,
} from './styles';

const ChatBox: React.FC = () => {
  return (
    <Container>
      <Conversations>
        <DropdownContainer>
          <Dropdown />
        </DropdownContainer>
        <SearchContainer>
          <Search />
        </SearchContainer>
        <MessagesContainer>
          <MessageList />
        </MessagesContainer>
      </Conversations>
      <ChatContainer>
        <h3>Chat</h3>
      </ChatContainer>
      <TrackingContainer>
        <h3>Tracking</h3>
      </TrackingContainer>
    </Container>
  );
};

export default ChatBox;
