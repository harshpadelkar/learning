import { configureStore } from "@reduxjs/toolkit";

import homeSlice from "./homeSlice";
import coursesSlice from "./coursesSlice";

export const store = configureStore({
  reducer: {
    home: homeSlice,
    courses: coursesSlice,
  },
});
