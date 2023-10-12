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

let isViewer = createSlice({
  name: 'isViewer',
  initialState: {
    value: '',
  },
  reducers: {
    setViewer(state, action: PayloadAction<string>) {
      state['value'] = action.payload;
    },
  },
});

let isWarningModal = createSlice({
  name: 'isWarningModal',
  initialState: { value: '' },
  reducers: {
    setWarningModal(state, action: PayloadAction<string>) {
      state['value'] = action.payload;
    },
  },
});

let isMenuList = createSlice({
  name: 'isMenuList',
  initialState: [
    { name: 'Blog', redirect: 'https://blog.iniru.kr' },
    { name: 'Reward', link: '/reward' },
    { name: 'Old', redirect: 'https://iniru.github.io/portfolio-old' },
  ],
  reducers: {},
});

export let { setDarkMode } = isDarkMode.actions;
export let { setViewer } = isViewer.actions;
export let { setWarningModal } = isWarningModal.actions;

export default configureStore({
  reducer: {
    isDarkMode: isDarkMode.reducer,
    isViewer: isViewer.reducer,
    isWarningModal: isWarningModal.reducer,
    isMenuList: isMenuList.reducer,
  },
});
