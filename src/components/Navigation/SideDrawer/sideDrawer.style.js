import styled from 'styled-components';

const SideDrawerWrapper = styled.aside`
  background-color: #fff;
  box-sizing: border-box;
  height: 100%;
  left: 0;
  max-width: 70%;
  padding: 32px 16px;
  position: fixed;
  top: 0;
  transition: transform 300ms ease-out;
  width: 280px;
  z-index: 200;

  @media (min-width: 500px) {
    display: none;
  }

  &.open {
    transform: translateX(0);
  }

  &.close {
    transform: translateX(-100%);
  }
`;

const LogoWrapper = styled.div`
  height: 11%;
  margin-bottom: 32px;
`;

export { LogoWrapper };

export default SideDrawerWrapper;
