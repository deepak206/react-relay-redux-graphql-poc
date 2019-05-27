import {combineReducers} from 'redux';
import pageReducer from './pageReducer';
import { connectRouter } from 'connected-react-router';

export default  (history) => combineReducers({
    router: connectRouter(history),
    pageReducer,
});