import imgThumb from '../../../assets/images/thumbnail.jpg';

import { Container, Video, Info } from './styles';

export default function Videothumb() {
  return (
    <Container>
      <Video>
        <img src={imgThumb} alt="" />
      </Video>
      <Info>
        <img src="https://github.com/kleytonsolinho.png" alt="" />
        <div>
          <h3>esse é o homem mais idoso do youtube</h3>
          <p>Flow Fora de Contexto</p>
          <span>500 visualizações - há 50 minutos</span>
        </div>
      </Info>
    </Container>
  );
}
