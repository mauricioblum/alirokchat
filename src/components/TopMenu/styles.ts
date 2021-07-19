import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  padding-bottom: 60px;

  @media (max-width: 760px) {
    display: none;
  }
`;

export const LogoContainer = styled.div`
  min-height: 50px;
`;

export const Nav = styled.nav`
  margin-left: 56px;
  width: 100%;
`;

export const NavMenu = styled.ul`
  display: flex;
  width: 100%;
  align-items: center;
  list-style-type: none;
`;

export const NavItem = styled.li<{ isActive?: boolean }>`
  cursor: pointer;
  letter-spacing: 0px;
  font-weight: bold;
  color: ${(props) => (props.isActive ? '#748EB5' : '#ccd9f2')};
  margin-right: 8%;
  &:last-child {
    margin-right: 0;
  }
`;
