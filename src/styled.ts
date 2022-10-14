import styled from 'styled-components';

export const StyledContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

export const StyledIcon = styled.div`
  position: absolute;
  background-image: url(${(props: { path: string }) => props.path});
  background-repeat: no-repeat;
  background-position: center;
`;

export const StyledYellowSmallSmile = styled(StyledIcon)`
  top: 2%;
  left: 2%;
  width: 90px;
  height: 90px;
`;

export const StyledMapIcons = styled.div`
  position: absolute;
  bottom: 50%;
  left: 0;
`;

export const StyledYellowBigSmile = styled(StyledIcon)`
  top: 0;
  left: 0;
  width: 128px;
  height: 128px;
`;

export const StyledMapCircle = styled(StyledIcon)`
  top: -100px;
  right: -350px;
  width: 70%;
  max-width: 976px;
  height: 100%;
  max-height: calc(100vh - 200px + 100px);
  background-size: contain;
  background-position: top;
`;

export const StyledPurpleSmile = styled(StyledIcon)`
  top: 80px;
  left: 10px;
  width: 208px;
  height: 208px;
  background-position: 50% 90%;
  background-size: 270px 270px;
`;
