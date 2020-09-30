
export const SET_ACTIVE_ELEMENT = 'SET_ACTIVE_ELEMENT';
export const REMOVE_IMAGE = 'REMOVE_IMAGE';
export const UPDATE_IMAGE = 'ADD_IMAGE';

export function setActiveElement(elem) {
  return { type: SET_ACTIVE_ELEMENT, elem }
}

export function removeImage(key) {
  return { type: REMOVE_IMAGE, key }
}

export function updateImage(key) {
  return { type: UPDATE_IMAGE, key }
}