import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducer";
// import { tasksReducer, filtersReducer } from "./reducers";

const store = configureStore({
  reducer: rootReducer,
});

// export const store = configureStore({
//   reducer: {
//     tasks: tasksReducer,
//     filters: filtersReducer,
//   },
// });
