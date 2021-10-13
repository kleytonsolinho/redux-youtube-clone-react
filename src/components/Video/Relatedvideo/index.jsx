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
        <strong>Como proteger seu patrimônio da inflação?</strong>
        <p>Você mais rico - Bruno Perini</p>
        <span>500 visualizações</span>
        <span>há 50 minutos</span>
      </Info>
    </Container>
  );
}
