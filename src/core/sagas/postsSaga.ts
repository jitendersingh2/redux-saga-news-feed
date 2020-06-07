import { put, call, takeEvery, all, fork } from "redux-saga/effects";

import { fetchPosts } from "../services";
import * as actionCreators from "../actionCreators";
import * as actionTypes from "../actionTypes";

function* onLoadPosts() {
  try {
    const data = yield call(fetchPosts);
    const posts = yield data;
    yield put(actionCreators.getPostsSuccess(posts));
  } catch (error) {
    yield put(actionCreators.getPostsSuccess(error));
  }
}

export function* watchOnLoadPosts() {
  yield takeEvery(actionTypes.GET_POSTS, onLoadPosts);
}

export default function* postsSaga() {
  yield all([fork(watchOnLoadPosts)]);
}
