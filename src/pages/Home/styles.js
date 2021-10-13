import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
`;

export const WrapperTag = styled.div`
  width: calc(100% - 240px);
  height: 50px;
  padding: 0 1rem;

  background-color: #212121;
  border-bottom: 1px solid rgba(221, 221, 221, 0.1);

  position: fixed;
  top: 60px;
  left: 240px;
  z-index: 10;
`;
