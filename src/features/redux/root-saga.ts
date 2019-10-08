import { fork } from "redux-saga/effects";
import counter from "../counter/saga";

export default function* rootSaga() {
  yield fork(counter);
}
