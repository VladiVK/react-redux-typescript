export type Todo = {
  id: number;
  title: string;
};

export type TodoState = {
  todos: Todo[];
  loading: boolean;
  error: null | string;
  page: number;
  limit: number;
};

export enum TodoActionTypes {
  FETCH_TODOS = 'FETCH_TODOS',
  FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
  FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
  SET_TODOS_PAGE = 'SET_TODOS_PAGE',
}

type FetchTodosAction = {
  type: TodoActionTypes.FETCH_TODOS;
};
type FetchTodosSuccessAction = {
  type: TodoActionTypes.FETCH_TODOS_SUCCESS;
  payload: any[];
};
type FetchTodosErrorsAction = {
  type: TodoActionTypes.FETCH_TODOS_ERROR;
  payload: string;
};
type FetchTodosPageAction = {
  type: TodoActionTypes.SET_TODOS_PAGE;
  payload: number;
};

export type TodosAction =
  | FetchTodosAction
  | FetchTodosSuccessAction
  | FetchTodosErrorsAction
  | FetchTodosPageAction;
