import React from 'react';
import { increment, decrement, addFive, subFive, reset } from './actions';
import { connect } from 'react-redux';

const App = ({ count, increment, decrement, addFive, subFive, reset }) => {
  return (
    <div>
      <h1>Hi, Redux</h1>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addFive}>Add 5</button>
      <button onClick={subFive}>Sub 5</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

const mapStateToProps = state => ({
  count: state.count
});

export default connect(mapStateToProps, {
  increment,
  decrement,
  addFive,
  subFive,
  reset
})(App);
