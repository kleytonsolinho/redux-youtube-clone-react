import { BiLike, BiDislike } from 'react-icons/bi';
import { RiShareForwardLine } from 'react-icons/ri';
import { FaEllipsisH } from 'react-icons/fa';
import { VscDebugRestartFrame } from 'react-icons/vsc';

import {
  Container, Video, Description, Subscriber,
} from './styles';

export default function Playervideo() {
  return (
    <Container>
      <Video>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/RYQ9pltY010" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </Video>
      <Description>
        <strong>Titulo do video em execução</strong>
        <div>
          <span>1.494 visualizações - 11 de mai. de 2020</span>
          <ul>
            <li>
              <BiLike className="icon" />
              1.2mil
            </li>
            <li>
              <BiDislike className="icon" />
              2
            </li>
            <li>
              <RiShareForwardLine className="icon" />
              Compartilhar
            </li>
            <li>
              <VscDebugRestartFrame className="icon" />
              Salvar
            </li>
            <li><FaEllipsisH className="icon" /></li>
          </ul>
        </div>
      </Description>
      <Subscriber>
        <div>
          <img src="https://github.com/kleytonsolinho.png" alt="" />
          <span>Primo Rico</span>
        </div>
        <button type="button">Inscrever-se</button>
      </Subscriber>
    </Container>
  );
}
