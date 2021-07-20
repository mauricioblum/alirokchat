import styled from 'styled-components';

export const StyledInput = styled.input`
  all: unset;
  margin-left: 16px;
  font-weight: bold;
  &::placeholder {
    color: ${(props) => props.theme.colors.primary};
    font-weight: normal;
  }
`;
