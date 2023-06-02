import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "categories",
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      const _id = action.payload.uid;
      const userName = action.payload.displayName;
      const image = action.payload.photoURL;

      state.user = { _id, userName, image };
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
