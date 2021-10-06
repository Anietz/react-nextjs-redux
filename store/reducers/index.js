import {combineReducers} from 'redux';
import addressReducer from './addressReducer';

const rootReducer = combineReducers({addressReducer});

export default rootReducer;