import {createStore} from 'redux';
import rootReducer from '../reducers';

const configureStore = (history) => {
    const reducers = rootReducer(history);
  
    const configStore = createStore(reducers);
  
    return configStore;
  };

export default configureStore;