import React from 'react';

const Counter = ({ count, onDecrement, onIncrement }) => {

    return (
      <div>
        <div>
          <button onClick={onDecrement}>-</button>
          <span>{count}</span>
          <button onClick={onIncrement}>+</button>
          <br />
          </div>
      </div>
    );
}


export default Counter;
