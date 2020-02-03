import { all, call, takeLatest, put } from "redux-saga/effects";
import { clearCart } from "./cart.actions";
import userActionTypes from "../user/user.types";

export function* clearCartOnSuccess() {
  yield put(clearCart());
}
export function* onSignOutSuccess() {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCartOnSuccess);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
