import { Container } from './styles';

import SearchBar from '../../components/SearchBar';

export default function Home() {
  return (
    <Container>
      <SearchBar />
      <h1>Home Page</h1>
    </Container>
  );
}
