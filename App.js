import React from 'react';
import {RecoilRoot} from 'recoil';
import CounterScreen from './src/screens/CounterScreen';

//The root component is wrapped around RecoilRoot
//to act as a global context provider

const App = () => {
  return (
    <RecoilRoot>
      <CounterScreen />
    </RecoilRoot>
  );
};

export default App;
