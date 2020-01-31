import { takeLatest, put, all, call } from "redux-saga/effects";
import userActionTypes from "./user.types";
import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser
} from "../../firebase/Firebase.Utils";
import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure
} from "./user.actions";

export function* getSnapshotFromUserAuth(userAuth) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    // const userRef = yield call(createUserProfileDocument, user);
    // const userSnapshot = yield userRef.get();
    // yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* signInwithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    //   const userRef = yield call(createUserProfileDocument, user);
    //   const userSnapshot = yield userRef.get();
    //   yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInwithEmail);
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* onSignOutStart() {
  yield takeLatest(userActionTypes.SIGN_OUT_START, signOut);
}
export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart)
  ]);
}
