import imgThumb from '../../../assets/images/thumbnail.jpg';

import { Container, Video, Info } from './styles';

export default function Searchthumb() {
  return (
    <Container>
      <Video>
        <img src={imgThumb} alt="" />
        <span>16:16</span>
      </Video>
      <Info>
        <strong>Como proteger seu patrimônio da inflação?</strong>
        <span>500 visualizações - há 50 minutos</span>
        <div>
          <img src="https://github.com/kleytonsolinho.png" alt="" />
          <p>Você mais rico - Bruno Perini</p>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore.
        </p>
      </Info>
    </Container>
  );
}
