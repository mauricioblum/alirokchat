import React, { useState, useMemo, useEffect } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useWindowSize } from '../../hooks';
import Chat from '../Chat';
import ChatInput from '../ChatInput';
import Dropdown from '../Dropdown';
import MessageList, { ChatMessage } from '../MessageList';
import Search from '../Search';
import Tracking from '../Tracking';

import {
  Container,
  Conversations,
  DropdownContainer,
  SearchContainer,
  MessagesContainer,
  ChatContainer,
  ChatBackButton,
  TrackingContainer,
} from './styles';

const ChatBox: React.FC = () => {
  const [conversationVisible, setConversationVisible] = useState(true);

  const { width: windowWidth } = useWindowSize();

  const messagesVisible = useMemo(() => {
    if (windowWidth) {
      return windowWidth > 1015 || !conversationVisible;
    }
    return true;
  }, [conversationVisible, windowWidth]);

  const handleChatMessageClick = (message: ChatMessage) => {
    if (windowWidth && windowWidth < 1015) {
      setConversationVisible(false);
    }
    console.log('message', message);
  };

  useEffect(() => {
    if (windowWidth) {
      setConversationVisible(windowWidth > 1015);
    }
  }, [windowWidth]);

  return (
    <Container>
      <Conversations isVisible={conversationVisible}>
        <DropdownContainer>
          <Dropdown />
        </DropdownContainer>
        <SearchContainer>
          <Search />
        </SearchContainer>
        <MessagesContainer>
          <MessageList onChatMessageClick={handleChatMessageClick} />
        </MessagesContainer>
      </Conversations>
      <ChatContainer isVisible={messagesVisible}>
        <ChatBackButton onClick={() => setConversationVisible(true)}>
          <FiArrowLeft size={24} />
          Messages
        </ChatBackButton>
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
