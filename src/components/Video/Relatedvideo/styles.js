import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100px;
  cursor: pointer;

  margin-top: 1rem;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Video = styled.div`
  width: 170px;
  height: 100%;
  position: relative;

  img {
    height: 100%;
  }

  span {
    position: absolute;
    bottom: 2px;
    right: 0;
    z-index: 2;

    background-color: #000000;
    font-size: 0.8rem;
    font-weight: bold;
    padding: 4px;
  }
`;

export const Info = styled.div`
  width: auto;
  height: 100%;
  padding: 0 1rem;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;

  strong {
    padding: 0;
    font-size: 1.1rem;
  }

  span {
    font-size: 0.8rem;
    color: #aaa;
  }

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-right: 10px;
  }

  p {
    color: #aaa;
    font-size: 0.9rem;
  }
`;
