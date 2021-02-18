import React, {Component} from 'react';
import CounterScreen from './src/screens/CounterScreen';
import CounterStore from './src/store/CounterStore';

//Passing down the state to be used by component that subscribe to it.
class App extends Component {
  render() {
    return <CounterScreen store={CounterStore} />;
  }
}

export default App;
