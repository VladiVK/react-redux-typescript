import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { todoReducer } from './todoReducer';

export const rootReducer = combineReducers({
  userReducer,
  todoReducer,
});

// !!! useSelector не особо с типами дружит
//  поэтому надо свой сделать для rootreducer

export type RootState = ReturnType<typeof rootReducer>;
