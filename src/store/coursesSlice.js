import { createSlice } from "@reduxjs/toolkit";

export const courseSlice = createSlice({
  name: "courses",
  initialState: {
    data: null,
    loading: null,
    error: null,
  },
  reducers: {
    setCoursesData: (state, action) => {
      state.data = action.payload;
    },
    setCoursesLoading: (state, action) => {
      state.loading = action.payload;
    },
    setCoursesError: (state, action) => {
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCoursesData, setCoursesLoading, setCoursesError } =
  courseSlice.actions;

export default courseSlice.reducer;
