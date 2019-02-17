import React from 'react';

const Counter = ({ count, onDecrement, onIncrement, timesClicked, onInputNumberChange, numberInputted, onInputNumber }) => {

    return (
      <div>
        <div>
          <button onClick={onDecrement}>-</button>
          <span>{count}</span>
          <button onClick={onIncrement}>+</button>
        </div>
      </div>
    );
}


export default Counter;
