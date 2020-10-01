
export const SET_ACTIVE_ELEMENT = 'SET_ACTIVE_ELEMENT';
export const REMOVE_IMAGE = 'REMOVE_IMAGE';
export const UPDATE_IMAGE = 'ADD_IMAGE';
export const UPDATE_ACTIVE_SLIDE = 'UPDATE_ACTIVE_SLIDE';

export function setActiveElement(elem) {
  return { type: SET_ACTIVE_ELEMENT, elem }
}
export function updateActiveSlide(index) {
  return { type: UPDATE_ACTIVE_SLIDE, index }
}

export function removeImage(key) {
  return { type: REMOVE_IMAGE, key }
}

export function updateImage(key) {
  return { type: UPDATE_IMAGE, key }
}