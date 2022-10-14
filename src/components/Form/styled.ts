import styled from 'styled-components';
import theme from 'styles/theme';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100vh - 200px);
  padding: 24px 0;
  margin-left: 10%;
  position: relative;
  z-index: 100;

  @media (max-width: 500px) {
    text-align: center;
    margin: 0;
  }
`;

export const StyledFormTitle = styled.h1`
  font-size: 40px;
  font-weight: 400;
  margin: 0;
  margin-bottom: 30px;
`;

export const StyledInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 600px;
  width: 100%;
  margin-bottom: 23px;
`;

const StyledField = styled.input`
  padding: 30px 46px;
  font-size: 18px;
  border-radius: 10px;
  border: 1px solid
    ${(props: { error: boolean; theme: typeof theme }) =>
      props.error ? props.theme.error.main : props.theme.gray.light};
  color: ${(props) => props.theme.gray.dark};

  width: 100%;

  &:focus-visible {
    outline: ${(props) => props.theme.gray.main} auto 1px;
  }

  &::placeholder {
    color: ${(props) => props.theme.gray.dark};
  }
`;

export const StyledTextArea = styled(StyledField).attrs({ as: 'textarea' })`
  height: 190px;
  resize: none;
`;

export const StyledInput = styled(StyledField)`
  height: 92px;
`;

export const StyledButton = styled.button`
  font-size: 18px;
  color: #ffffff;
  background-color: ${(props) => props.theme.primary.main};
  border-radius: 50px;
  width: 218px;
  height: 72px;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const StyledErrorMessage = styled.span`
  color: ${(props) => props.theme.error.main};
  padding: 4px 0 0 46px;
`;

export const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
