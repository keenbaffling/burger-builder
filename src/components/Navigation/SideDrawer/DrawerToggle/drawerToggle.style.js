import styled from 'styled-components';

const DrawerToggleWrapper = styled.button`
  background-color: transparent;
  border: 0;
  width: 40px;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  box-sizing: border-box;
  cursor: pointer;

  span {
    display: block;
    width: 32px;
    height: 3px;
    background-color: white;

    @media (min-width: 500px) {
      display: none;
    }
  }
`;

export default DrawerToggleWrapper;
