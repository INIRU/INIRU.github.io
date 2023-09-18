import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

let isDarkMode = createSlice({
  name: 'isDarkMode',
  initialState: {
    value: window.matchMedia('(prefers-color-scheme: dark)').matches,
  },
  reducers: {
    setDarkMode(state, action: PayloadAction<boolean>) {
      state['value'] = action.payload;
    },
  },
});

export let { setDarkMode } = isDarkMode.actions;

export default configureStore({
  reducer: {
    isDarkMode: isDarkMode.reducer,
  },
});
