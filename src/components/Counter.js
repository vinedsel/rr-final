import React from 'react';

const Counter = ({ onDecrement, onIncrement, onButtonCount, buttonCount }) => {

    return (
      <div>
        <div>
          <button onClick={onDecrement}>-</button>
          <span>{count}</span>
          <button onClick={onIncrement}>+</button>
          <br />
          <button onClick={onButtonCount}>Times the Increment/Decrement buttons have been clicked: {buttonCount} </button>
          </div>
      </div>
    );
}


export default Counter;
