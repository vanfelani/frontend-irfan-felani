import {
  FIND_CONTACTS_FAILURE,
  FIND_CONTACTS_REQUEST,
  FIND_CONTACTS_SUCCESS,
  DELETE_CONTACT_FAILURE,
  DELETE_CONTACT_REQUEST,
  DELETE_CONTACT_SUCCESS,
  FIND_CONTACT_REQUEST,
  FIND_CONTACT_FAILURE,
  FIND_CONTACT_SUCCESS,
  SAVE_CONTACT_FAILURE,
  SAVE_CONTACT_REQUEST,
  SAVE_CONTACT_SUCCESS,
} from '../actions/constants';

import {put, takeLatest} from 'redux-saga/effects';

import {commonAxios} from '../utils/apiUtils';

function* findAll(action) {
  try {
    const data = yield commonAxios.get('contact');
    yield put({
      type: FIND_CONTACTS_SUCCESS,
      data: data,
    });
  } catch (error) {
    yield put({
      type: FIND_CONTACTS_FAILURE,
      error: error,
    });
  }
}

export function* watchFindContacts() {
  yield takeLatest(FIND_CONTACTS_REQUEST, findAll);
}

function* deleteById(action) {
  try {
    const data = yield commonAxios.delete(`contact/${action.id}`);

    yield put({
      type: DELETE_CONTACT_SUCCESS,
      data: data,
    });
  } catch (error) {
    yield put({
      type: DELETE_CONTACT_FAILURE,
      error: error,
    });
  }
}

export function* watchDeleteContacts() {
  yield takeLatest(DELETE_CONTACT_REQUEST, deleteById);
}

function* findById(action) {
  try {
    const data = yield commonAxios.get(`contact/${action.id}`);
    yield put({
      type: FIND_CONTACT_SUCCESS,
      data: data,
    });
  } catch (error) {
    yield put({
      type: FIND_CONTACT_FAILURE,
      error: error,
    });
  }
}

export function* watchFindContact() {
  yield takeLatest(FIND_CONTACT_REQUEST, findById);
}

function* save(action) {
  const {id, firstName, lastName, age} = action.data;
  let photo = action.data.photo;
  if (photo == '') {
    photo = 'N/A';
  }
  try {
    const data = yield id
      ? commonAxios.put(`contact/${id}`, {firstName, lastName, age, photo})
      : commonAxios.post('contact', {firstName, lastName, age, photo});

    yield put({
      type: SAVE_CONTACT_SUCCESS,
      data: data,
    });
  } catch (error) {
    yield put({
      type: SAVE_CONTACT_FAILURE,
      error: error,
    });
  }
}

export function* watchSaveContact() {
  yield takeLatest(SAVE_CONTACT_REQUEST, save);
}
