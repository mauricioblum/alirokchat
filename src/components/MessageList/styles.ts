import styled, { css } from 'styled-components';

export const Container = styled.div``;
export const MessageBox = styled.div<{ isSelected?: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 110px;
  padding: 0px 4px;
  cursor: pointer;
  ${(props) =>
    props.isSelected &&
    css`
      background: #f6f9fd 0% 0% no-repeat padding-box;
      border-radius: 15px;
    `}
`;

export const MessageText = styled.p`
  text-align: left;
  letter-spacing: 0px;
  color: ${(props) => props.theme.colors.primary};
  max-height: 42px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ContactImage = styled.img`
  box-shadow: 0px 3px 6px #396cce42;
  border: 1px solid #396cce29;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 23px;
`;
