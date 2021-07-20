import React from 'react';
import { GiPaperClip } from 'react-icons/gi';
import Input, { InputProps } from '../Input';
import {
  Wrapper,
  Container,
  InputContainer,
  FileButton,
  SendButton,
} from './styles';

export interface ChatInputProps extends InputProps {
  files?: string[];
}

const ChatInput = React.forwardRef<HTMLInputElement, ChatInputProps>(
  ({ placeholder = 'Type your message here...', ...rest }, ref) => {
    return (
      <Wrapper>
        <Container>
          <InputContainer>
            <FileButton>
              <GiPaperClip size={20} color="#748EB5" />
            </FileButton>
            <Input ref={ref} placeholder={placeholder} {...rest} />
          </InputContainer>
          <SendButton>Press Enter</SendButton>
        </Container>
      </Wrapper>
    );
  },
);

export default ChatInput;
