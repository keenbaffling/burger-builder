import styled from 'styled-components';

const BuildControlWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 5px 0;

  button {
    border: 1px solid #aa6817;
    cursor: pointer;
    display: block;
    font: inherit;
    margin: 0 5px;
    outline: none;
    padding: 5px;
    width: 80px;
  }

  button:disabled {
    background-color: #ac9980;
    border: 1px solid #7e7365;
    color: #ccc;
    cursor: default;
  }

  button:hover:disabled {
    background-color: #ac9980;
    color: #ccc;
    cursor: not-allowed;
  }

  label {
    padding: 10px;
    font-weight: bold;
    width: 80px;
  }

  .Less {
    background-color: #d39952;
    color: white;
  }

  .More {
    background-color: #8f5e1e;
    color: white;
  }

  .Less:hover,
  .Less:active {
    background-color: #daa972;
    color: white;
  }

  .More:hover,
  .More:active {
    background-color: #99703f;
    color: white;
  }
`;

export {};

export default BuildControlWrapper;
