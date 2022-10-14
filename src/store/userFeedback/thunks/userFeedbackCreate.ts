import { createAsyncThunk } from '@reduxjs/toolkit';
import { UseFormReset } from 'react-hook-form';
import { toast } from 'react-toastify';

import { createFeedbackMessage } from 'api/userFeedback';
import { UserFeedback } from 'types/userFeedback';

const USER_FEEDBACK_CREATE_START_TYPE = 'USER_FEEDBACK_CREATE_START';

export const userFeedbackCreateStart = createAsyncThunk<
  void,
  { data: UserFeedback; reset: UseFormReset<UserFeedback> }
>(USER_FEEDBACK_CREATE_START_TYPE, async ({ data, reset }) => {
  try {
    const { message } = await createFeedbackMessage(data);
    reset();
    toast.success(message);
  } catch (error) {
    toast.error(error as string);
  }
});
