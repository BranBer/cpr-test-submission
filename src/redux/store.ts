import { configureStore } from "@reduxjs/toolkit";
import { questionnaireSlice } from "./slices/questionnaireSlice";

export const store = configureStore({
  reducer: {
    questionnaire: questionnaireSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
