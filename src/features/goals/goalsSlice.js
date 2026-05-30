import { goalsApi } from "@/api/endpoints/goal";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  ui: {
    loading: false,
  },
};

export const getAllGoals = createAsyncThunk(
  "goals/getAllGoals",
  async (_, { rejectWithValue }) => {
    try {
      const res = await goalsApi.getAllGoals();
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Something went wrong!",
      );
    }
  },
);

export const createGoal = createAsyncThunk(
  "goals/createGoal",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await goalsApi.createGoal(payload);
      return res.data;
    } catch (error) {
      console.log("error found", error);
      return rejectWithValue(
        error.response?.data?.message || "Cound not create goal.",
      );
    }
  },
);

export const updateGoal = createAsyncThunk(
  "goals/updateGoal",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await goalsApi.updateGoal(payload);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Update failed");
    }
  },
);

export const deleteGoal = createAsyncThunk(
  "goals/deleteGoal",
  async (id, { rejectWithValue }) => {
    try {
      const res = await goalsApi.deleteGoal(id);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Delete failed");
    }
  },
);

const goalSlice = createSlice({
  name: "goals",
  initialState,
  reducers: {
    resetState: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllGoals.pending, (state) => {
        state.ui.loading = true;
      })
      .addCase(getAllGoals.fulfilled, (state, action) => {
        state.data = action.payload.data;
        state.ui.loading = false;
      })
      .addCase(getAllGoals.rejected, (state) => {
        state.ui.loading = false;
      })
      .addCase(createGoal.pending, (state) => {
        state.ui.loading = true;
      })
      .addCase(createGoal.fulfilled, (state) => {
        state.ui.loading = false;
      })
      .addCase(createGoal.rejected, (state) => {
        state.ui.loading = false;
      })
      .addCase(updateGoal.pending, (state) => {
        state.ui.loading = true;
      })
      .addCase(updateGoal.fulfilled, (state) => {
        state.ui.loading = false;
      })
      .addCase(updateGoal.rejected, (state) => {
        state.ui.loading = false;
      })
      .addCase(deleteGoal.pending, (state) => {
        state.ui.loading = true;
      })
      .addCase(deleteGoal.fulfilled, (state) => {
        state.ui.loading = false;
      })
      .addCase(deleteGoal.rejected, (state) => {
        state.ui.loading = false;
      });
  },
});

export const { resetState } = goalSlice.actions;

export default goalSlice.reducer;
