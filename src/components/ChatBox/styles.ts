import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #396cce42;
  border: 1px solid #aebcd842;
  border-radius: 20px;
  display: flex;
  overflow: hidden;
`;

export const Conversations = styled.div`
  flex: 1;
  flex-basis: 0;
  height: 100%;
  border-right: 1px solid #bac7da;
  position: relative;
`;

export const DropdownContainer = styled.div`
  height: 55px;
  border-bottom: 1px solid #aebcd842;
  padding: 20px 22px;
  display: flex;
  align-items: center;
`;

export const SearchContainer = styled.div`
  padding: 20px 22px;
  padding-left: 30px;
  display: flex;
  align-items: center;
`;

export const MessagesContainer = styled.div`
  padding-right: 4px;
  max-height: 100%;
  overflow-y: auto;
`;

export const ChatContainer = styled.div`
  flex: 2;
  flex-basis: 0;
  padding: 54px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TrackingContainer = styled.div`
  flex: 1;
  flex-basis: 0;
  border-left: 1px solid #bac7da;
  padding: 40px 30px 0px 30px;
`;
