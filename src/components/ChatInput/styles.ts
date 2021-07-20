import styled from 'styled-components';

export const Wrapper = styled.div`
  border-top: 1px solid #bac7da;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 16px;

  svg {
    margin-right: 20px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  > input {
    width: 90%;
    font-size: 18px;
  }
  padding-right: 16px;
`;

export const FileButton = styled.button``;

export const SendButton = styled.button`
  color: ${(props) => props.theme.colors.primary};
  font-size: 18px;
  flex-shrink: 0;
`;
