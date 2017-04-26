import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Calculator from './components/Calculator.js';
import reducers from './Reducers/Expression.js';


class App extends Component {

  render() {
    const store = createStore(reducers, { expressionStr: '' });
    return (
      <Provider store={store}>
        <Calculator />
      </Provider>
    );
  }
}

export default App;
