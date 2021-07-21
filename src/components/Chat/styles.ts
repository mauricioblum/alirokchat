import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 36px;
`;
export const MessageContainer = styled.div<{ messageAlign?: 'left' | 'right' }>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) =>
    props.messageAlign === 'right' ? 'flex-end' : 'flex-start'};
  margin-bottom: 13px;
`;

export const MessageDate = styled.p`
  font-weight: bold;
  letter-spacing: 0px;
  color: ${(props) => props.theme.colors.secondary};
`;

export const MessageBox = styled.div<{ messageAlign?: 'left' | 'right' }>`
  display: flex;
  align-items: center;
  margin-top: 8px;

  > img {
    order: ${(props) => (props.messageAlign === 'right' ? 2 : 1)};
  }
  > p {
    order: ${(props) => (props.messageAlign === 'right' ? 1 : 2)};
  }
  max-width: 75%;
  @media (max-width: 565px) {
    max-width: 90%;
  }
`;

export const UserImage = styled.img`
  box-shadow: 0px 3px 6px #396cce42;
  border: 1px solid #396cce29;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin: 0px 15px;
  @media (max-width: 565px) {
    margin: 0;
  }
`;

export const MessageText = styled.p`
  font-weight: bold;
  letter-spacing: 0px;
  color: ${(props) => props.theme.colors.primary};
  margin: 0px 15px;
`;
