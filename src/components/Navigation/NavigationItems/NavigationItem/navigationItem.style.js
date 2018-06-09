import styled from 'styled-components';

const ItemWrapper = styled.li`
  box-sizing: border-box;
  display: block;
  margin: 10px 0;
  width: 100%;

  a {
    box-sizing: border-box;
    color: #8f5c2c;
    display: block;
    text-decoration: none;
    transition: opacity 200ms ease-out;
    width: 100%;

    &:hover,
    &:active,
    &.active {
      color: #40a4c8;
    }
  }

  @media (min-width: 500px) {
    align-items: center;
    display: flex;
    height: 100%;
    margin: 0;
    width: auto;

    a {
      border-bottom: 4px solid transparent;
      color: #fff;
      height: 100%;
      padding: 16px 10px;
      transition: opacity 200ms ease-out;

      &:hover,
      &:active,
      &.active {
        background-color: #8f5c2c;
        border-bottom: 4px solid #40a4c8;
        color: #fff;
      }
    }
  }
`;

export default ItemWrapper;
