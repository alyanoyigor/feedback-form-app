import { Footer } from 'components/Footer';
import { Form } from 'components/Form';

import YellowSmallSmileIcon from 'assets/svg/yellow-small-smile.svg';
import PurpleSmileIcon from 'assets/svg/purple-smile.svg';
import YellowBigSmileIcon from 'assets/svg/yellow-big-smile.svg';
import MapCircleImage from 'assets/img/map-circle.png';

import {
  StyledContainer,
  StyledYellowSmallSmile,
  StyledYellowBigSmile,
  StyledMapCircle,
  StyledPurpleSmile,
  StyledMapIcons,
} from './styled';

const App = () => (
  <StyledContainer>
    <StyledYellowSmallSmile path={YellowSmallSmileIcon} />
    <StyledMapCircle path={MapCircleImage}>
      <StyledMapIcons>
        <StyledPurpleSmile path={PurpleSmileIcon} />
        <StyledYellowBigSmile path={YellowBigSmileIcon} />
      </StyledMapIcons>
    </StyledMapCircle>
    <Form />
    <Footer />
  </StyledContainer>
);

export default App;
