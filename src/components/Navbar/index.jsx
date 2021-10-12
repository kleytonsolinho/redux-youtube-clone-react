import {
  FaHome,
  FaRegCompass,
  FaYoutubeSquare,
  FaRegClone,
  FaHistory,
  FaRegCaretSquareRight,
  FaRegClock,
  FaRegSun,
  FaRegFlag,
  FaRegQuestionCircle,
  FaRegCommentDots,
} from 'react-icons/fa';

import { Container } from './styles';

export default function Navbar() {
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
      </ul>
      <ul>
        <li>
          <FaRegClone className="icon" />
          Biblioteca
        </li>
        <li>
          <FaHistory className="icon" />
          Histórico
        </li>
        <li>
          <FaRegCaretSquareRight className="icon" />
          Seus vídeos
        </li>
        <li>
          <FaRegClock className="icon" />
          Assistir mais tarde
        </li>
      </ul>
      <ul>
        <li>
          <FaRegSun className="icon" />
          Configurações
        </li>
        <li>
          <FaRegFlag className="icon" />
          Histórico de denúncias
        </li>
        <li>
          <FaRegQuestionCircle className="icon" />
          Ajuda
        </li>
        <li>
          <FaRegCommentDots className="icon" />
          Enviar feedback
        </li>
      </ul>
      <div>
        <p>© 2021 Google LLC</p>
      </div>
    </Container>
  );
}
