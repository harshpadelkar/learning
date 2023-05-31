import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "categories",
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    getUser: (state, action) => {
      state.categoriesLoading = action.payload;
    },
    setUserNull: (state, action) => {
      state.user = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, getUser, setUserNull } = userSlice.actions;

export default userSlice.reducer;
