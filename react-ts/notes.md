import React from 'react';
import ReactDOM from 'react-dom';

interface AppProps {
  color?: string;
}

// interface AppState {
//   counter: number;
// }

// const App = (props: AppProps): JSX.Element => {
//   return (
//     <div>
//       {props.color}
//     </div>
//   )
// }

class App extends React.Component<AppProps /*, AppState */> {
  state = { counter: 0 }
  // constructor(props: AppProps) {
  //   super(props);

  //   this.state = {
  //     counter: 0
  //   }
  // }

  onIncrement = (): void => {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  onDecrement = (): void => {
    this.setState({
      counter: this.state.counter - 1
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
        <div>{this.state.counter}</div>
      </div>
    )
  }
}

ReactDOM.render(
  <App color="red" />,
  document.querySelector('#root')
);
