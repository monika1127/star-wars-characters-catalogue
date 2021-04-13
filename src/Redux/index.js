import {combineReducers } from 'redux';
import charctersReducers from './characters/reducers';


export default combineReducers({
  charcters: charctersReducers,
});
