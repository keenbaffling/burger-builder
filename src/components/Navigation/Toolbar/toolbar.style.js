import styled from 'styled-components';

const ToolbarWrapper = styled.header`
  align-items: center;
  background-color: #703b09;
  box-sizing: border-box;
  display: flex;
  height: 56px;
  justify-content: space-between;
  left: 0;
  position: fixed;
  padding: 0 15px;
  top: 0;
  width: 100%;
  z-index: 90;

  nav {
    height: 100%;
  }

  @media (max-width: 499px) {
    .is-desktop {
      display: none;
    }
  }
`;

const LogoWrapper = styled.div`
  height: 80%;
`;

export { LogoWrapper };

export default ToolbarWrapper;
