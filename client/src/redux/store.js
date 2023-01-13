import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import breeds from './reducer';

const store = createStore(
   breeds,
   applyMiddleware(thunk)
);

export default store;