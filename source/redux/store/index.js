import { createStore, combineReducers, applyMiddleware} from 'redux';
import rootReducer from '../reducer'
import thunk from 'redux-thunk';
// const rootReducer = combineReducers({
//   reducer: rootReducer,
// });
 
export const store = createStore(rootReducer, applyMiddleware(thunk));