import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';

const reducer = function(state = 0, action) {
  console.log(action);
  if (action.type == 'increment') {
    state += 1;
  }
  return state;
};

const store = createStore(combineReducers({reducer}), {});

console.log(store);

class Wrapper extends React.Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate() );
  }

  render() {
    return (
      <div>
        <h1>{store.getState().reducer}</h1>
        <button onClick={() => store.dispatch({type: 'increment'})}>
          increment
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Wrapper />, document.getElementById('foo'));
