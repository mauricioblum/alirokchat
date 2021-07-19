import React from 'react';

import { ContactImage, Container, MessageBox, MessageText } from './styles';

const messages = [
  {
    id: 1,
    message:
      'Hi, yes, the revised documents need to be delivered today before 5 pm',
    profileImg: 'https://picsum.photos/50/50',
    selected: true,
  },
  {
    id: 2,
    message:
      'Hi, yes, the revised documents need to be delivered today before 5 pm',
    profileImg: 'https://picsum.photos/50/50',
    selected: false,
  },
  {
    id: 3,
    message:
      'Hi, yes, the revised documents need to be delivered today before 5 pm',
    profileImg: 'https://picsum.photos/50/50',
    selected: false,
  },
  {
    id: 4,
    message:
      'Hi, yes, the revised documents need to be delivered today before 5 pm',
    profileImg: 'https://picsum.photos/50/50',
    selected: false,
  },
  {
    id: 5,
    message:
      'Hi, yes, the revised documents need to be delivered today before 5 pm',
    profileImg: 'https://picsum.photos/50/50',
    selected: false,
  },
  {
    id: 6,
    message:
      'Hi, yes, the revised documents need to be delivered today before 5 pm',
    profileImg: 'https://picsum.photos/50/50',
    selected: false,
  },
  {
    id: 7,
    message:
      'Hi, yes, the revised documents need to be delivered today before 5 pm',
    profileImg: 'https://picsum.photos/50/50',
    selected: false,
  },
  {
    id: 8,
    message:
      'Hi, yes, the revised documents need to be delivered today before 5 pm',
    profileImg: 'https://picsum.photos/50/50',
    selected: false,
  },
  {
    id: 9,
    message:
      'Hi, yes, the revised documents need to be delivered today before 5 pm',
    profileImg: 'https://picsum.photos/50/50',
    selected: false,
  },
  {
    id: 10,
    message:
      'Hi, yes, the revised documents need to be delivered today before 5 pm',
    profileImg: 'https://picsum.photos/50/50',
    selected: false,
  },
];

const MessageList: React.FC = () => {
  return (
    <Container>
      {messages.map((message) => (
        <MessageBox key={message.id} isSelected={message.selected}>
          <ContactImage src={message.profileImg} alt="Contact" />
          <MessageText>{message.message}</MessageText>
        </MessageBox>
      ))}
    </Container>
  );
};

export default MessageList;
