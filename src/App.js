import React from 'react';
import {
  increment,
  decrement,
  addFive,
  subFive,
  reset,
  addResults
} from './actions';
import { connect } from 'react-redux';

const App = ({
  count,
  results,
  increment,
  decrement,
  addFive,
  subFive,
  reset,
  addResults
}) => {
  return (
    <div>
      <h1>Hi, Redux</h1>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addFive}>Add 5</button>
      <button onClick={subFive}>Sub 5</button>
      <button onClick={reset}>Reset</button>
      <hr />
      <button onClick={() => addResults(count)}>Add Result</button>
      <ul>
        {results.map(result => (
          <li key={result.id}>{result.number}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  count: state.counterReducer.count,
  results: state.resultsReducer.results
});

export default connect(mapStateToProps, {
  increment,
  decrement,
  addFive,
  subFive,
  reset,
  addResults
})(App);
