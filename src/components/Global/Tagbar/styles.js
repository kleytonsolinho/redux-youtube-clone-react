import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  ul {
    list-style: none;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  ul li {
    width: auto;
    height: 30px;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.6rem;
    margin-right: 10px;
    border: 1px solid rgba(221, 221, 221, 0.1);
    border-radius: 20px;
    cursor: pointer;
    white-space: nowrap;

    background-color: #373737;

    &:hover {
      background-color: #494949;
    }
  }
`;
