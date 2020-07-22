import { Todo, FetchTodosAction } from '../actions';
import { act } from 'react-dom/test-utils';
import { ActionTypes } from '../actions/types';

const initialState: Todo[] = []

export const todosReducer = (state = initialState, action: FetchTodosAction) => {
  switch(action.type) {
    case ActionTypes.FETCH_TODOS: {
      return action.payload;
    }
    default:
      return state;
  }
}