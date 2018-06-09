import styled from 'styled-components';

const ItemsWrapper = styled.ul`
  align-items: center;
  display: flex;
  flex-flow: column;
  height: 100%;
  list-style: none;
  margin: 0;
  padding: 0;

  &:hover a:not(:hover) {
    opacity: 0.5;
  }

  @media (min-width: 500px) {
    flex-flow: row;
  }
`;

export default ItemsWrapper;
