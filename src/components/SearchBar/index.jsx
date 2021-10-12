import {
  FiSearch, FiVideo, FiGrid, FiBell,
} from 'react-icons/fi';

import imgLogo from '../../assets/images/YouTube-Logo.svg';

import {
  Container, Logo, Search, Channel,
} from './styles';

export default function SearchBar() {
  return (
    <Container>
      <Logo>
        <img src={imgLogo} alt="" />
      </Logo>
      <Search>
        <input type="text" placeholder="Pesquisar" />
        <button type="button">
          <FiSearch />
        </button>
      </Search>
      <Channel>
        <FiVideo className="icon" />
        <FiGrid className="icon" />
        <FiBell className="icon" />
        <img src="https://github.com/kleytonsolinho.png" alt="" />
      </Channel>
    </Container>
  );
}
