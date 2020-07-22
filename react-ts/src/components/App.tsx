import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
}

class _App extends React.Component<AppProps> {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    console.log(this.props.todos);
    return (
      <div>Hi there</div>
    )
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return {
    todos: todos
  };
}

export const App = connect(
  mapStateToProps, 
  { fetchTodos }
)(_App);