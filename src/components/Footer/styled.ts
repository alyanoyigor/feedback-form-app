import styled from 'styled-components';
import { StyledIcon } from 'styled';

export const StyledFooter = styled.footer`
  position: relative;
  height: 200px;
  background-color: #fafafa;
  border-top: 1px solid #d8d8d8;

  display: flex;
  align-items: center;
`;

export const StyledSocialMediaIcon = styled.img`
  height: 40px;
  width: 40px;
  filter: invert(42%) sepia(0%) saturate(0%) hue-rotate(206deg) brightness(96%)
    contrast(90%);
`;

export const StyledFooterPurpleSmile = styled(StyledIcon)`
  top: 10px;
  left: 0;
  width: 208px;
  height: 208px;
  background-position: 50% 90%;
  background-size: 270px 270px;
`;

export const StyledFooterTurquoiseSmile = styled(StyledIcon)`
  top: 0;
  right: 10%;
  width: 80px;
  height: 98px;
  background-position: top;
  background-size: contain;
`;

export const StyledFooterYellowSmile = styled(StyledIcon)`
  bottom: 30px;
  right: -25px;
  width: 85px;
  height: 85px;
  background-size: 115px 115px;
`;

export const StyledSocialMediaLink = styled.a.attrs({ href: '#' })`
  cursor: pointer;
`;

export const StyledSocialMediaContainer = styled.div`
  display: flex;
  margin-left: 20%;
`;
