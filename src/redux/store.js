import { configureStore, combineReducers } from "@reduxjs/toolkit";
import toolSlice from "./reducers/index";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/index";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  request: toolSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
