import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import breeds from './reducer';

const store = createStore(
   breeds,
   composeWithDevTools(applyMiddleware(thunk))
);

export default store;