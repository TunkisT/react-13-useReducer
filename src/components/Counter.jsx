import React, { useReducer, useState } from 'react';
const initCounterValue = { count: 0 };

function Counter() {
  const [value, setValue] = useState(5);

  function countReducer(state, action) {
    console.log('reducer fired', action);

    switch (action?.type) {
      case 'add':
        return { count: state.count + 1 };
      case 'addAmount':
        return { count: state.count + action.payLoad };
      case 'minus':
        return { count: state.count - 1 };
      default:
        return { count: 1000 };
    }
  }

  const [state, dispatch] = useReducer(countReducer, initCounterValue);

  function plusOne() {
    dispatch({ type: 'add' });
    // setValue((prevState) => prevState + 1);
  }
  function plusFive(x) {
    // setValue((prevState) => prevState + x);
    dispatch({ type: 'addAmount', payLoad: x });
  }

  function minusOne() {
    dispatch({ type: 'minus' });
    // setValue((prevState) => prevState - 1);
  }

  return (
    <div>
      <button onClick={plusOne}> +</button>
      <button onClick={() => plusFive(20)}> +5</button>
      <button onClick={minusOne}>-</button>
      <h1>Reiksme: {state.count}</h1>
    </div>
  );
}

export default Counter;
