import styled from 'styled-components';

export const Container = styled.div`
  width: 72px;
  height: 100%;

  position: fixed;
  top: 60px;
  left: 0;
  z-index: 10;

  background-color: #212121;

  .icon {
    font-size: 1.5rem;
    color: #ffffff;
    margin-bottom: 7px;
  }

  ul {
    list-style: none;
  }

  ul li {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    font-size: 0.6rem;
    padding: 1rem 0;
    cursor: pointer;

    &:hover {
      background-color: #333;
    }
  }
`;
