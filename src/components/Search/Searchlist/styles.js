import styled from 'styled-components';

export const Container = styled.div`
  width: calc(100% - 72px);
  height: calc(100% - 60px);
  max-width: 1100px;

  position: relative;
  top: 60px;
  left: 72px;
  margin: 0 auto;

  padding: 2rem 0;
`;

export const Filter = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(221, 221, 221, 0.1);

  font-size: 1rem;
  color: #aaa;
  cursor: pointer;

  strong {
    text-transform: uppercase;
    margin-left: 10px;
  }
`;

export const VideoList = styled.div`
  h3 {
    padding: 1.5rem 0 0 0;
  }
`;
