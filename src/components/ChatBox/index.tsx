import React from 'react';
import Chat from '../Chat';
import ChatInput from '../ChatInput';
import Dropdown from '../Dropdown';
import MessageList from '../MessageList';
import Search from '../Search';
import Tracking from '../Tracking';

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
        <Chat messages={[]} />
        <ChatInput />
      </ChatContainer>
      <TrackingContainer>
        <Tracking />
      </TrackingContainer>
    </Container>
  );
};

export default ChatBox;
