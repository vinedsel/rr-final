import React from 'react';

const Counter = ({ count, onDecrement, onIncrement, timesClicked, onInputNumberChange, numberInputted, onInputNumber }) => {

    return (
      <div>
        <div>
          <button onClick={onDecrement}>-</button>
          <span>{count}</span>
          <button onClick={onIncrement}>+</button>
        </div><br />
        <span>Times the increment/decrement buttons have been clicked: {timesClicked}</span><br/>
        <input onChange={event => onInputNumberChange(event.target.value)} type="text" value={numberInputted}/>
        <button onClick={onInputNumber}>Change Count Number</button>
      </div>
    );
}


export default Counter;
