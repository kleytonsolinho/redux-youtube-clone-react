import styled from 'styled-components';

export const Container = styled.div`
  width: calc(100% - 240px);
  height: calc(100% - 110px);
  padding: 0 2rem;

  position: relative;
  top: 110px;
  left: 240px;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 10px;
  grid-template-areas:
    ". . ."
    ". . ."
    ". . ."
    ". . .";
`;
