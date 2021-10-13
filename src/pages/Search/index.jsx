import { Container } from './styles';

import NavbarSmall from '../../components/Global/NavbarSmall';
import Searchbar from '../../components/Global/Searchbar';
import Searchlist from '../../components/Search/Searchlist';

export default function Search() {
  return (
    <Container>
      <Searchbar />
      <NavbarSmall />
      <Searchlist />
    </Container>
  );
}
