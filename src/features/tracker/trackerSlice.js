import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false,
};

const trackerSlice = createSlice({
  name: "tracker",
  initialState,
  reducers: {
    addTrackerData: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    updateTrackerData: (state, action) => {
      const updatedItem = action.payload;

      const index = state.data.findIndex((item) => item.id === updatedItem.id);

      if (index !== -1) {
        state.data[index] = updatedItem;
      }
    },
    deleteTrackerData: (state, action) => {
      const id = action.payload;

      state.data = state.data.filter((item) => item.id !== id);
    },
  },
});

export const { addTrackerData, updateTrackerData, deleteTrackerData } =
  trackerSlice.actions;
export default trackerSlice.reducer;
