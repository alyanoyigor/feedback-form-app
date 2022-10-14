import * as yup from 'yup';
import { UserFeedback } from 'types/userFeedback';

const required = 'This field is required';

export const userFeedbackSchema: yup.SchemaOf<UserFeedback> = yup.object({
  name: yup
    .string()
    .max(30, 'Name should be less than 30 characters')
    .required(required),
  email: yup.string().email('Invalid email format').required(required),
  message: yup
    .string()
    .max(250, 'Message should be less than 250 characters')
    .required(required),
});
