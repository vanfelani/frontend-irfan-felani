import {combineReducers} from 'redux';
import {
  getContacts,
  deleteContactById,
  getContact,
  savedContact,
} from './contacts';

export default combineReducers({
  getContacts,
  deleteContactById,
  getContact,
  savedContact,
});
