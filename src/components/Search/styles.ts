import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;
export const StyledInput = styled.input`
  all: unset;
  margin-left: 16px;
  font-weight: bold;
  &::placeholder {
    color: #748eb5;
    font-weight: normal;
  }
`;
