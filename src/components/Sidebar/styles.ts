import styled, { css } from 'styled-components';

export const Container = styled.aside`
  height: 100%;
  width: 54px;
  background: #050505;
  padding: 34px 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SidebarItem = styled.button<{ isActive?: boolean }>`
  display: flex;
  margin-bottom: 30px;
  position: relative;

  &:last-child {
    margin-bottom: 0;
  }
  ${(props) =>
    props.isActive &&
    css`
      &::before {
        display: block;
        position: absolute;
        top: 0;
        left: -13px;
        content: '';
        width: 4px;
        height: 100%;
        background: transparent
          linear-gradient(180deg, #1880d9 0%, #e60791 63%, #f55353 100%) 0% 0%
          no-repeat padding-box;
        border-radius: 5px;
      }
    `}
`;
