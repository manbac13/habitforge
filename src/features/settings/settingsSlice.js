import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  general: {
    precision: 0,
  },
  theme: {
    appThemeMode: "light",
  },
  loading: false,
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    toggleTheme: (state, action) => {
      state.theme.appThemeMode = action.payload;
    },
    setPrecision: (state, action) => {
      state.general.precision = action.payload;
    },
  },
});

export const { toggleTheme, setPrecision } = settingsSlice.actions;
export default settingsSlice.reducer;
