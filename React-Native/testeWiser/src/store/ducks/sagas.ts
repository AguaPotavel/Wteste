import {call, put} from 'redux-saga/effects';
import api from '../../Services/api';
import {fetchAction, User} from '../ducks/types';

import {Validation} from '../ducks/actions';

export function* auth(params: fetchAction) {
  try {
    console.log(params.payload);
    const response = yield call(api.get, '/login');
    const authentication = response.data.filter((item: User) => {
      return (
        item.email === params.payload.email &&
        item.password === params.payload.password
      );
    });
    if (authentication.length > 0) {
      yield put(Validation({submitted: true, isValid: true}));
    } else {
      yield put(Validation({submitted: true, isValid: false}));
    }
  } catch (e) {
    console.log(e);
  }
}
