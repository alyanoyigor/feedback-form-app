import { socialMediaList } from 'data/socialMediaList';

import TurquoiseSmileIcon from 'assets/svg/turquoise-smile.svg';
import YellowSmallSmileIcon from 'assets/svg/yellow-small-smile.svg';
import PurpleSmileIcon from 'assets/svg/purple-smile.svg';

import {
  StyledFooter,
  StyledFooterPurpleSmile,
  StyledFooterTurquoiseSmile,
  StyledFooterYellowSmile,
  StyledSocialMediaContainer,
  StyledSocialMediaIcon,
  StyledSocialMediaLink,
} from './styled';

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterPurpleSmile path={PurpleSmileIcon} />
      <StyledFooterTurquoiseSmile path={TurquoiseSmileIcon} />
      <StyledFooterYellowSmile path={YellowSmallSmileIcon} />
      <StyledSocialMediaContainer>
        {socialMediaList.map((socialMedia) => (
          <StyledSocialMediaLink key={socialMedia.alt}>
            <StyledSocialMediaIcon
              src={socialMedia.src}
              alt={socialMedia.alt}
            />
          </StyledSocialMediaLink>
        ))}
      </StyledSocialMediaContainer>
    </StyledFooter>
  );
};
