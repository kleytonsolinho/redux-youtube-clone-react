import { FaSlidersH } from 'react-icons/fa';

import Searchthumb from '../Searchthumb';

import { Container, Filter, VideoList } from './styles';

export default function Searchlist() {
  return (
    <Container>
      <Filter>
        <FaSlidersH />
        <strong>Filtros</strong>
      </Filter>
      <VideoList>
        <h3>Aprenda enquanto está em casa</h3>
        <Searchthumb />
        <Searchthumb />
        <Searchthumb />
        <Searchthumb />
        <Searchthumb />
      </VideoList>
    </Container>
  );
}
