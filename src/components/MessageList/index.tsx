import React from 'react';
import { PackageType } from '../../services/models';

import { ContactImage, Container, MessageBox, MessageText } from './styles';

export interface ChatMessage {
  id: number;
  message: string;
  type: PackageType;
  conversation: string[];
  profileImg: string;
  username: string;
}

interface MessageListProps {
  messages: ChatMessage[];
  selectedMessageId: number;
  onChatMessageClick: (message: ChatMessage) => void;
}

const MessageList: React.FC<MessageListProps> = ({
  messages,
  selectedMessageId,
  onChatMessageClick,
}) => {
  return (
    <Container>
      {messages.map((message) => (
        <MessageBox
          key={message.id}
          isSelected={message.id === selectedMessageId}
          onClick={() => onChatMessageClick(message)}
        >
          <ContactImage src={message.profileImg} alt="Contact" />
          <MessageText>{message.message}</MessageText>
        </MessageBox>
      ))}
    </Container>
  );
};

export default MessageList;
