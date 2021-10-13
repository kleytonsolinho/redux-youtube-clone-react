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
          <h3>Como proteger seu patrimônio da inflação?</h3>
          <p>Você mais rico - Bruno Perini</p>
          <span>500 visualizações - há 50 minutos</span>
        </div>
      </Info>
    </Container>
  );
}
