import { createSlice } from "@reduxjs/toolkit";

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categoriesData: null,
    categoriesLoading: null,
    categoriesError: null,
  },
  reducers: {
    setCategoriesData: (state, action) => {
      state.categoriesData = action.payload;
    },
    setCategoriesLoading: (state, action) => {
      state.categoriesLoading = action.payload;
    },
    setCategoriesError: (state, action) => {
      state.categoriesError = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCategoriesData, setCategoriesLoading, setCategoriesError } =
  categoriesSlice.actions;

export default categoriesSlice.reducer;
