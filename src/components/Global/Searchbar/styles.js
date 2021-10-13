import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 60px;
  padding: 0 1.5rem;
  background-color: #212121;
  border-bottom: 1px solid rgba(221, 221, 221, 0.1);

  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .icon {
    font-size: 1.5rem;
    color: #ffffff;
    margin-right: 20px;
    cursor: pointer;
  }
`;

export const Logo = styled.div`
  width: auto;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 20px;
  }
`;

export const Search = styled.div`
  width: auto;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  input {
    width: 500px;
    height: 40px;
    padding: 5px;
    color: #ffffff;
    font-size: 1.1rem;
    background-color: #121212;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    border: 1px solid rgba(221, 221, 221, 0.1);
  }

  input:focus {
    outline: 1px solid #4682b4;
  }

  button {
    width: 60px;
    height: 40px;
    background-color: #313131;
    border: none;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    color: #ffffff;
  }

  button:nth-of-type(2) {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 10px;
    background-color: #181818;
  }
`;

export const Channel = styled.div`
  width: 150px;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    cursor: pointer;
  }
`;
