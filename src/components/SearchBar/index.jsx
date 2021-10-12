import {
  FiMenu, FiSearch, FiVideo, FiGrid, FiBell,
} from 'react-icons/fi';

import { FaMicrophone } from 'react-icons/fa';

import imgLogo from '../../assets/images/logo-youtube.png';

import {
  Container, Logo, Search, Channel,
} from './styles';

export default function Searchbar() {
  return (
    <Container>
      <Logo>
        <FiMenu className="icon" />
        <img src={imgLogo} alt="Logo YouTube" />
      </Logo>
      <Search>
        <input type="text" placeholder="Pesquisar" />
        <button type="button">
          <FiSearch />
        </button>
        <button type="button">
          <FaMicrophone />
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
