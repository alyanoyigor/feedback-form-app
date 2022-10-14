import { useForm } from 'react-hook-form';
import { userFeedbackCreateStart } from 'store/userFeedback/thunks/userFeedbackCreate';
import { yupResolver } from '@hookform/resolvers/yup';

import { useAppDispatch } from 'store';
import { userFeedbackSchema } from 'validation/userFeedbackSchema';
import { UserFeedback } from 'types/userFeedback';
import {
  StyledButton,
  StyledErrorMessage,
  StyledForm,
  StyledFormTitle,
  StyledInput,
  StyledInputs,
  StyledInputWrapper,
  StyledTextArea,
} from './styled';

export const Form = () => {
  const {
    formState: { errors },
    register,
    reset,
    handleSubmit,
  } = useForm<UserFeedback>({
    resolver: yupResolver(userFeedbackSchema),
  });

  const dispatch = useAppDispatch();

  const onSubmit = (data: UserFeedback) => {
    dispatch(userFeedbackCreateStart({ data, reset }));
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledFormTitle>Reach out to us!</StyledFormTitle>
      <StyledInputs>
        <StyledInputWrapper>
          <StyledInput
            placeholder="Your name*"
            id="name"
            error={Boolean(errors.name?.message)}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('name')}
          />
          {errors.name && (
            <StyledErrorMessage>{errors.name.message}</StyledErrorMessage>
          )}
        </StyledInputWrapper>
        <StyledInputWrapper>
          <StyledInput
            placeholder="Your e-mail*"
            id="email"
            error={Boolean(errors.email?.message)}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('email')}
          />
          {errors.email && (
            <StyledErrorMessage>{errors.email.message}</StyledErrorMessage>
          )}
        </StyledInputWrapper>
        <StyledInputWrapper>
          <StyledTextArea
            placeholder="Your message*"
            id="message"
            error={Boolean(errors.message?.message)}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('message')}
          />
          {errors.message && (
            <StyledErrorMessage>{errors.message.message}</StyledErrorMessage>
          )}
        </StyledInputWrapper>
      </StyledInputs>
      <StyledButton type="submit">Send message</StyledButton>
    </StyledForm>
  );
};
