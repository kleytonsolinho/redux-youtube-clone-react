import styled from 'styled-components';

export const Container = styled.div`
  width: 240px;
  height: 100%;

  position: fixed;
  top: 60px;
  left: 0;
  z-index: 10;

  background-color: #212121;

  overflow-x: hidden;
  overflow-y: hidden;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #aaa;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &:hover {
    overflow-y: scroll;
  }

  .icon {
    font-size: 1.5rem;
    color: #ffffff;
    margin-right: 20px;
  }

  span {
    width: 24px;
    height: 24px;
    border-radius: 50%;

    background-color: #333333;

    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  }

  .icon-radius {
    font-size: 1rem;
    color: #ffffff;
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
    /* overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis; */

    display: flex;
    align-items: center;

    &:hover {
      background-color: #383838;
    }
  }

  strong {
    padding: 0 2rem;
    text-transform: uppercase;
    font-size: 0.9rem;
    color: #aaaaaa;
  }

  div {
    padding: 1rem 2rem;
    font-size: 0.8rem;
    color: #606060;
  }
`;
