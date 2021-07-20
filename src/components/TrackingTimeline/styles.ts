import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 25px;

  > div {
    display: flex;
    align-items: center;
    margin-bottom: 29px;
    position: relative;
    &:last-child {
      margin-bottom: 0;
      &::after {
        display: none;
      }
    }
    &::after {
      position: absolute;
      display: block;
      content: '';
      left: 7px;
      bottom: -35px;
      width: 2px;
      height: 100%;
      border-right: 1.5px dashed #c2c5da;
    }
  }

  div.info {
    display: flex;
    flex-direction: column;
    margin-left: 22px;
  }

  img {
    width: 20px;
    height: 20px;
    border-radius: 10px;
  }

  p.eventName {
    font-size: 17px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.primary};
  }
  p.eventDate {
    font-size: 14px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.secondary};
  }
`;
