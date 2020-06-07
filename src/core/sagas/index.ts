import { all, fork } from "redux-saga/effects";
import PostsSaga from "./postsSaga";

export default function* rootSaga() {
  yield all([fork(PostsSaga)]);
}
