import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 200px;
  cursor: pointer;

  margin: 1.5rem 0;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Video = styled.div`
  width: 360px;
  height: 100%;
  position: relative;

  img {
    width: 100%;
  }

  span {
    position: absolute;
    bottom: 5px;
    right: 5px;
    z-index: 2;

    background-color: #000000;
    font-size: 0.9rem;
    font-weight: bold;
    padding: 5px;
  }
`;

export const Info = styled.div`
  width: auto;
  overflow: hidden;
  height: 100%;
  padding: 0 1rem;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  strong {
    padding: 0;
    font-size: 1.1rem;
  }

  span {
    margin-top: 10px;
    font-size: 0.8rem;
    color: #aaa;
  }

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-right: 10px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    margin: 1rem 0;
    color: #aaa;
  }

  p {
    color: #aaa;
    /* white-space: nowrap;
    text-overflow: ellipsis; */
  }
`;
