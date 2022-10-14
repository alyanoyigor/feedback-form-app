import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import userFeedbackCreateReducer from './userFeedback/reducer/userFeedbackCreate';

const rootReducer = combineReducers({
  userFeedbackCreate: userFeedbackCreateReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type Store = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
