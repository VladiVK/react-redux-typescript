//   ****

// помним, что dispatch автоматом прокинет redux-thunk
// dispatch надо типизировать dispatch: Dispatch<UserAction>,
// чтобы выводил ошбки

// ****
import axios from 'axios';
import { Dispatch } from 'react';
import { UserAction, UserActionTypes } from '../../types/users';

export const fetchUsersCreator = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USERS });
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      dispatch({
        type: UserActionTypes.FETCH_USERS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: UserActionTypes.FETCH_USERS_ERROR,
        payload: 'Error. Something went wrong.',
      });
    }
  };
};
