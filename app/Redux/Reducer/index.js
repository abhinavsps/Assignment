// this. File combines all reducer and export them
import { combineReducers } from 'redux';
import * as Post_reducer from './Post_reducer';




const appReducer = combineReducers(Object.assign(
    Post_reducer,

));

export default appReducer;
