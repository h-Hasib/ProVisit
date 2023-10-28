import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDarkTheme:
    // localStorage.getItem('isDarkTheme') ||
    false,
};
// action: PayloadAction<String>
export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleAppTheme: state => {
      // localStorage.setItem('isDarkTheme', state.isDarkTheme)
      state.isDarkTheme = !state.isDarkTheme;
    },
  },
});

export const { toggleAppTheme } = appSlice.actions;
export default appSlice.reducer;
