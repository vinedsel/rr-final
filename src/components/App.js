import React from 'react';
import Counter from './Counter';
import { connect } from 'react-redux';
import { increment, decrement, timesClicked } from '../actions/index';

class App extends React.Component {
  render() {
    return (
      <div>
        <h3>Counter</h3>
        <Counter count={this.props.count} onIncrement={this.props.onIncrement} onDecrement={this.props.onDecrement}/>
        <h4>Times the increment/decrement buttons have been clicked:</h4> {this.props.timesClicked}<br />
        <input onChange={event => onInputNumberChange(event.target.value)}/>
        <button onClick={this.props.onInputNumber}>Change Count Number</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    ontimesClicked: () => dispatch(timesClicked())
  };
}
function mapStateToProps(state) {
    return {
      count: state.count,
      timesClicked: state.timesClicked
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);
