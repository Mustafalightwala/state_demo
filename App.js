import React, {useState} from 'react';
import CounterScreen from './src/screens/CounterScreen';
import appContext from './src/context/Context';

//Provider inside the function App provides the capability to access context which wrapped from it.
//It provides the data and functions to pass down to all the components.
const App = () => {
  const [count, setCount] = useState(0);
  return (
    <appContext.Provider value={{count, setCount}}>
      <CounterScreen />
    </appContext.Provider>
  );
};

export default App;
