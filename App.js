import React from 'react';
import CounterScreen from './src/screens/CounterScreen';
import CounterStore from './src/store/CounterStore';

//Passing down the state to be used by component that subscribe to it.
const App = () => <CounterScreen store={CounterStore} />;

export default App;
