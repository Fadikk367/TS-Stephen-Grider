import { FetchTodosAction, DeleteTodoAction } from './todos.actions';

export enum ActionTypes {
  FETCH_TODOS,
  DELETE_TODO
};

export type Action = FetchTodosAction | DeleteTodoAction;