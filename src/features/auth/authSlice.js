import { authApi } from "@/api/endpoints/auth";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const login = createAsyncThunk(
  "auth/login",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await authApi.login(payload);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
  },
);

export const register = createAsyncThunk(
  "auth/register",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await authApi.register(payload);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Sign up failed");
    }
  },
);

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: {
    ui: false,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      localStorage.removeItem("access_token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading.ui = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading.ui = false;
        state.user = action.payload.data;
        state.isAuthenticated = true;
      })
      .addCase(login.rejected, (state) => {
        state.loading.ui = false;
      })
      .addCase(register.pending, (state) => {
        state.loading.ui = true;
      })
      .addCase(register.fulfilled, (state) => {
        state.loading.ui = false;
      })
      .addCase(register.rejected, (state) => {
        state.loading.ui = false;
      });
  },
});

export const { setIsAuthenticated, logout } = authSlice.actions;

export default authSlice.reducer;
