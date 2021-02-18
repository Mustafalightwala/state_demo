import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './src/reducers/CounterReducer';
import CounterScreen from './src/screens/CounterScreen';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <CounterScreen />
    </Provider>
  );
};

export default App;
