import {action} from 'typesafe-actions';
import {LoginTypes, Login, User} from './types';

export const Validation = (data: Login) => action(LoginTypes.VALIDATE, data);

export const DoLogin = (data: User) => action(LoginTypes.USER, data);
