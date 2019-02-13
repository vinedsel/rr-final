import React from 'react';
import Counter from './Counter';
import { connect } from 'react-redux';
import { increment, decrement, buttonCount } from '../actions/index';

class App extends React.Component {
  render() {
    return (
      <div>
        <h3>Counter</h3>
        <Counter count={this.props.count} onIncrement={this.props.onIncrement} onDecrement={this.props.onDecrement}/>
        <br/>
        <h4>Times the Increment/Decrement buttons have been clicked: {this.props.buttonCount}</h4>
        <input /><button onClick={this.onButtonCount}>Change Count Number</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onButtonCount: () => dispatch(buttonCount())
  };
}
function mapStateToProps(state) {
    return {
      count: state.count,
      buttonCount: state.buttonCount
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);
