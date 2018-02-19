import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux';
import {createStore, combineReducers} from 'redux';

const incrementer = function(state = 0, action) {
  if (action.type == 'increment') {
    state += 1;
  }
  return state;
};

const store = createStore(combineReducers({incrementer}), {});

class Wrapper extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.number}</h1>
        <button onClick={() => store.dispatch({type: 'increment'})}>
          increment
        </button>
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    number: state.incrementer
  };
};
const WrapperWrapper = connect(mapStateToProps)(Wrapper);

ReactDOM.render(
  <Provider store={store}>
    <WrapperWrapper />
  </Provider>,
  document.getElementById('foo'),
);
