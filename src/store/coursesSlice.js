import { createSlice } from "@reduxjs/toolkit";

export const courseSlice = createSlice({
  name: "courses",
  initialState: {
    data: null,
    loading: null,
    error: null,
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setData, setLoading, setError } = courseSlice.actions;

export default courseSlice.reducer;
