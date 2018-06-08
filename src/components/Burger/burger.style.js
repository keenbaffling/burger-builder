import styled from 'styled-components';

const BurgerWrapper = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  height: 250px;
  margin: auto;
  overflow: auto;
  text-align: center;
  width: 100%;

  @media (min-width: 1000px) and (min-height: 700px) {
    height: 600px;
    width: 700px;
  }

  @media (min-width: 500px) and (min-height: 401px) {
    height: 400px;
    width: 450px;
  }

  @media (min-width: 500px) and (max-height: 400px) {
    height: 300px;
    width: 350px;
  }
`;

export default BurgerWrapper;
