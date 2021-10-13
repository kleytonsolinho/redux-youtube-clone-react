import imgThumb from '../../../assets/images/thumbnail.jpg';

import { Container, Video, Info } from './styles';

export default function Relatedvideo() {
  return (
    <Container>
      <Video>
        <img src={imgThumb} alt="" />
        <span>16:16</span>
      </Video>
      <Info>
        <strong>esse é o homem mais idoso do youtube</strong>
        <p>Flow Fora de Contexto</p>
        <span>500 visualizações</span>
        <span>há 50 minutos</span>
      </Info>
    </Container>
  );
}
