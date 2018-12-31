import { NAME } from './constants';

export const getStatus = state =>  state[NAME].isSignupSuccessful;

export const getMessage = state => state[NAME].message;
