import { UserFeedback } from 'types/userFeedback';
import client from './client';

export const createFeedbackMessage = async (data: UserFeedback) => {
  try {
    return await client.post<never, { message: string }>(
      `/user-feedback`,
      data,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};
