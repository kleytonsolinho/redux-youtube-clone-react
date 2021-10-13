import {
  FaHome,
  FaRegCompass,
  FaYoutubeSquare,
  FaRegClone,
  FaHistory,
} from 'react-icons/fa';

import { Container } from './styles';

export default function NavbarSmall() {
  return (
    <Container>
      <ul>
        <li>
          <FaHome className="icon" />
          Início
        </li>
        <li>
          <FaRegCompass className="icon" />
          Explorar
        </li>
        <li>
          <FaYoutubeSquare className="icon" />
          Inscrições
        </li>
        <li>
          <FaRegClone className="icon" />
          Biblioteca
        </li>
        <li>
          <FaHistory className="icon" />
          Histórico
        </li>
      </ul>
    </Container>
  );
}
