import {all, fork} from 'redux-saga/effects';
import {
  watchFindContacts,
  watchDeleteContacts,
  watchFindContact,
  watchSaveContact,
} from './contacts';

export default function* rootSaga() {
  yield all([
    fork(watchFindContacts),
    fork(watchDeleteContacts),
    fork(watchFindContact),
    fork(watchSaveContact),
  ]);
}
