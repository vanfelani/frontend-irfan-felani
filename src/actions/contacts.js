import {
  FIND_CONTACTS_REQUEST,
  DELETE_CONTACT_REQUEST,
  FIND_CONTACT_REQUEST,
  SAVE_CONTACT_REQUEST,
} from './constants';

export function findAll() {
  return {
    type: FIND_CONTACTS_REQUEST,
  };
}

export function deleteById(id) {
  return {
    type: DELETE_CONTACT_REQUEST,
    id: id,
  };
}

export function findById(id) {
  return {
    type: FIND_CONTACT_REQUEST,
    id: id,
  };
}

export function save(data) {
  return {
    type: SAVE_CONTACT_REQUEST,
    data: data,
  };
}
