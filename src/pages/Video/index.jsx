import { Container, Content, RelatedList } from './styles';

import Searchbar from '../../components/Global/Searchbar';
import Tagbar from '../../components/Global/Tagbar';
import Playervideo from '../../components/Video/Playervideo';
import Relatedvideo from '../../components/Video/Relatedvideo';

export default function Video() {
  return (
    <Container>
      <Searchbar />
      <Content>
        <Playervideo />
        <RelatedList>
          <Tagbar />
          <Relatedvideo />
          <Relatedvideo />
          <Relatedvideo />
          <Relatedvideo />
          <Relatedvideo />
          <Relatedvideo />
          <Relatedvideo />
        </RelatedList>
      </Content>
    </Container>
  );
}
