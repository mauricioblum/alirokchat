import React, { useState, useMemo, useEffect } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useWindowSize } from '../../hooks';
import { useShipments } from '../../hooks/shipments';
import { PackageType } from '../../services/models';
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
  const [selectedShipmentId, setSelectedShipmentId] = useState(1);
  const [inputValue, setInputValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<PackageType>('parcel');

  const { shipments, postMessage } = useShipments();

  const { width: windowWidth } = useWindowSize();

  const backButtonVisible = windowWidth ? windowWidth < 1015 : false;

  const messageListData: ChatMessage[] = useMemo(() => {
    return shipments.map((shipment) => ({
      id: shipment.id,
      type: shipment.type,
      message: shipment.chat_data[0].text,
      conversation: shipment.chat_data.map((c) => c.text),
      profileImg: `https://i.pravatar.cc/150?u=${shipment.chat_data[0].user_uuid}`,
      username: shipment.sender.full_name,
    }));
  }, [shipments]);

  const messageFilteredData = useMemo(() => {
    return messageListData
      .filter((messages) => messages.type === selectedType)
      .filter(
        (data) =>
          data.username
            .trim()
            .toLowerCase()
            .includes(searchTerm.trim().toLowerCase()) ||
          data.conversation.find((text) =>
            text.trim().toLowerCase().includes(searchTerm.trim().toLowerCase()),
          ),
      );
  }, [messageListData, searchTerm, selectedType]);

  const messagesVisible = useMemo(() => {
    if (windowWidth) {
      return windowWidth > 1015 || !conversationVisible;
    }
    return true;
  }, [conversationVisible, windowWidth]);

  const selectedChat = useMemo(() => {
    const selectedShipment = shipments.find(
      (shipment) => shipment.id === selectedShipmentId,
    );
    if (selectedShipment) {
      return selectedShipment.chat_data;
    }
    return [];
  }, [selectedShipmentId, shipments]);

  const handleChatMessageClick = (message: ChatMessage) => {
    if (windowWidth && windowWidth < 1015) {
      setConversationVisible(false);
    }
    setSelectedShipmentId(message.id);
  };

  const handleSendMessage = () => {
    if (inputValue === '') {
      return;
    }

    const message = {
      id: selectedChat.length + 3,
      user_uuid: 102,
      created_at: new Date().toISOString(),
      text: inputValue,
    };

    postMessage(selectedShipmentId, message);
    setInputValue('');
  };

  useEffect(() => {
    if (windowWidth) {
      setConversationVisible(windowWidth > 1015);
    }
  }, [windowWidth]);

  const handleSelectDropDown = (type: string) => {
    setSelectedType(type as PackageType);
    setSearchTerm('');
  };

  return (
    <Container>
      <Conversations isVisible={conversationVisible}>
        <DropdownContainer>
          <Dropdown onSelect={handleSelectDropDown} />
        </DropdownContainer>
        <SearchContainer>
          <Search
            value={searchTerm}
            onSearch={(query) => setSearchTerm(query)}
          />
        </SearchContainer>
        <MessagesContainer>
          <MessageList
            messages={messageFilteredData}
            selectedMessageId={selectedShipmentId}
            onChatMessageClick={handleChatMessageClick}
          />
        </MessagesContainer>
      </Conversations>
      <ChatContainer isVisible={messagesVisible}>
        {backButtonVisible && (
          <ChatBackButton onClick={() => setConversationVisible(true)}>
            <FiArrowLeft size={24} />
            Messages
          </ChatBackButton>
        )}
        <Chat messages={selectedChat} />
        <ChatInput
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onSendMessageClick={handleSendMessage}
        />
      </ChatContainer>
      <TrackingContainer>
        <Tracking
          shipment={shipments.find(
            (shipment) => shipment.id === selectedShipmentId,
          )}
        />
      </TrackingContainer>
    </Container>
  );
};

export default ChatBox;
