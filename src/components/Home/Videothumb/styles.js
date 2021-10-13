import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  height: auto;
  padding: 1rem 0;

  cursor: pointer;
`;

export const Video = styled.div`
  width: 100%;
  height: auto;

  img {
    width: 100%;
  }
`;

export const Info = styled.div`
  width: 100%;
  height: auto;

  padding: 0.5rem 0;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  div {
    margin-left: 10px;
  }

  div h3 {
    font-size: 1.1rem;
    margin-bottom: 10px;
  }

  div p,
  div span {
    color: #aaa;
  }
`;
