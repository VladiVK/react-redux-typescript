//   ****

// помним, что dispatch автоматом прокинет redux-thunk
// dispatch надо типизировать dispatch: Dispatch<UserAction>,
// чтобы выводил ошбки

// ****
import axios from 'axios';
import { Dispatch } from 'react';
import { TodoActionTypes, TodosAction } from '../../types/todo';

export const fetchTodosCreator = (page = 1, limit = 10) => {
  return async (dispatch: Dispatch<TodosAction>) => {
    try {
      dispatch({ type: TodoActionTypes.FETCH_TODOS });
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos',
        { params: { _page: page, _limit: limit } }
      );
      dispatch({
        type: TodoActionTypes.FETCH_TODOS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: TodoActionTypes.FETCH_TODOS_ERROR,
        payload: 'Error. Something went wrong.',
      });
    }
  };
};

export const setTodoPage = (page: number): TodosAction => {
  return { type: TodoActionTypes.SET_TODOS_PAGE, payload: page };
};
