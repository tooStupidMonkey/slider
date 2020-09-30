
import {REMOVE_IMAGE, UPDATE_IMAGE, SET_ACTIVE_ELEMENT } from './actions'
import images from '../../data/images'
import {PLACEHOLDER_AMOUNT} from '../../utils/constants';

const initialState = {
  allImages: [...images],
  activeImages: new Array(PLACEHOLDER_AMOUNT).fill({}),
  activeElement: null
}

export function sliderApp(state = initialState, action) {
  switch (action.type) {
    case UPDATE_IMAGE:
      let newActiveImages = [...state.activeImages];
      newActiveImages[action.key] = state.allImages[state.activeElement]
      return {...state, activeImages: newActiveImages}
    case REMOVE_IMAGE:
      let updatedActiveImages = [...state.activeImages];
      updatedActiveImages[action.key] = {}
      return {...state, activeImages: updatedActiveImages}
    case SET_ACTIVE_ELEMENT:
      return {...state, activeElement: action.elem}
    default:
      return state
  }
}