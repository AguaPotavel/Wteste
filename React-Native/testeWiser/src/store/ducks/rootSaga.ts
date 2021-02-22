import {all, takeLatest} from 'redux-saga/effects';

import {LoginTypes} from '../ducks/types';
import {auth} from '../ducks/sagas';

export default function* rootSaga() {
  return yield all([takeLatest(LoginTypes.USER, auth)]);
}
