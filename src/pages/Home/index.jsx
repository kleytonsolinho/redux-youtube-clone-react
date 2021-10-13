import { Container, WrapperTag } from './styles';

import Navbar from '../../components/Global/Navbar';
import Searchbar from '../../components/Global/Searchbar';
import Tagbar from '../../components/Global/Tagbar';
import Videogrid from '../../components/Home/Videogrid';

export default function Home() {
  return (
    <Container>
      <Searchbar />
      <Navbar />
      <WrapperTag>
        <Tagbar />
      </WrapperTag>
      <Videogrid />
    </Container>
  );
}
