import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../saga/userSaga";
import thunk from "redux-thunk";

// Apply middleware
const sagaMiddleware = createSagaMiddleware();

// Đăng kí reducer cho redux quản lí
// const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
const store = createStore(rootReducer, applyMiddleware(thunk));

// Chạy middleware cho redux để chạy các effect tại dòng code
// sagaMiddleware.run(rootSaga);

export default store;