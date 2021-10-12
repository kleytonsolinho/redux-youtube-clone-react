import styled from 'styled-components';

export const Container = styled.div`
  width: 240px;
  height: 100%;

  position: fixed;
  top: 60px;
  left: 0;
  z-index: 10;

  background-color: #212121;

  .icon {
    font-size: 1.5rem;
    color: #ffffff;
    margin-right: 20px;
  }

  ul {
    width: 100%;
    height: auto;
    list-style: none;
    padding: 0.5rem 0;

    border-bottom: 1px solid rgba(221, 221, 221, 0.1);
  }

  ul li {
    width: 100%;
    height: 40px;
    padding: 0 2rem;
    cursor: pointer;

    font-size: 0.9rem;

    display: flex;
    align-items: center;

    &:hover {
      background-color: #383838;
    }
  }

  div {
    padding: 1rem 2rem;
    font-size: 0.8rem;
    color: #606060;
  }
`;
