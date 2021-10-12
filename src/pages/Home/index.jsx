import { Container } from './styles';

import Navbar from '../../components/Navbar';
import Searchbar from '../../components/Searchbar';

export default function Home() {
  return (
    <Container>
      <Searchbar />
      <Navbar />
      <h1>Home Page</h1>
    </Container>
  );
}
