import { createStore, combineReducers } from 'redux'
import { sliderApp } from './slider/reducers';

const slider = combineReducers({
  sliderApp
})

const store = createStore(slider)

export default store;