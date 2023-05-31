import { configureStore } from "@reduxjs/toolkit";

import homeSlice from "./homeSlice";
import coursesSlice from "./coursesSlice";
import categoriesSlice from "./categoriesSlice";
import userSlice from "./userSlice";

export const store = configureStore({
  reducer: {
    home: homeSlice,
    courses: coursesSlice,
    categories: categoriesSlice,
    user: userSlice,
  },
});
