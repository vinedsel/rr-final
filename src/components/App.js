import React from 'react';
import Counter from './Counter';
import { connect } from 'react-redux';
import { increment, decrement, timesClicked, onInputNumber, onInputNumberChange } from '../actions/index';

class App extends React.Component {
  render() {
    return (
      <div>
        <h3>Counter</h3>
        <Counter count={this.props.count} timesClicked={this.props.timesClicked} onIncrement={this.props.onIncrement} onDecrement={this.props.onDecrement} onInputNumber={this.props.onInputNumber} onInputNumberChange={this.props.onInputNumberChange} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    ontimesClicked: () => dispatch(timesClicked()),
    ononInputNumber: () => dispatch(onInputNumber()),
    ononInputNumberChange: () => dispatch(onInputNumberChange())
  };
}
function mapStateToProps(state) {
    return {
      count: state.count,
      timesClicked: state.timesClicked,
      onInputNumberChange: state.onInputNumberChange
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);
