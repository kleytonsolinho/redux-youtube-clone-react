import styled from 'styled-components';

export const Container = styled.div`
  width: calc(100% - 240px);
  height: calc(100% - 110px);

  position: relative;
  top: 110px;
  left: 240px;

  padding: 0 2rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 0px 5px;
  grid-template-areas:
    ". . ."
    ". . ."
    ". . ."
    ". . .";
`;
