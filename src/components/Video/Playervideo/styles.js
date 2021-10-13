import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 100%;
`;

export const Video = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1280px;
  max-height: calc(1280px * 9 / 16);

  background: aquamarine;
`;

export const Description = styled.div`
  width: 100%;
  height: 95px;
  border-bottom: 1px solid rgba(221, 221, 221, 0.1);

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  strong {
    width: 100%;
    font-size: 1.2rem;
  }

  span {
    font-size: 0.9rem;
    color: #aaa;
  }

  div {
    width: 100%;
    margin-top: 1rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  ul {
    list-style: none;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  }

  ul li {
    margin-left: 1rem;
    cursor: pointer;
    line-height: 1rem;
    font-weight: bold;

    display: flex;
    align-items: center;
  }

  ul li .icon {
    font-size: 1.2rem;
    margin-right: 5px;
  }
`;

export const Subscriber = styled.div`
  width: 100%;
  height: 95px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  div img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }

  div span {
    margin-left: 10px;
    font-weight: bold;
  }

  button {
    width: 133px;
    height: 37px;
    border: none;
    background-color: #c00;
    color: #ffffff;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 0.9rem;
    margin-right: 5px;
  }
`;
