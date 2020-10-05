
import {REMOVE_IMAGE, UPDATE_IMAGE, SET_ACTIVE_ELEMENT, UPDATE_ACTIVE_SLIDE } from './actions'
import images from '../../data/images'
import {PLACEHOLDER_AMOUNT} from '../../utils/constants';

const initialState = {
  allImages: [...images],
  activeImages: new Array(PLACEHOLDER_AMOUNT).fill({}),
  activeElement: null,
  activeSlide: 0
}

export function sliderApp(state = initialState, action) {
  switch (action.type) {
    case UPDATE_IMAGE:
      state.activeImages[action.key] = state.allImages[state.activeElement]
      return {...state, activeImages: [...state.activeImages]}
    case REMOVE_IMAGE:
      let updatedActiveImages = [...state.activeImages];
      updatedActiveImages[action.key] = {}
      return {...state, activeImages: updatedActiveImages}
    case SET_ACTIVE_ELEMENT:
      return {...state, activeElement: action.elem}
    case UPDATE_ACTIVE_SLIDE:
      return {...state, activeSlide: action.index}
    default:
      return state
  }
}