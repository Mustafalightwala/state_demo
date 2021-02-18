import {createContext} from 'react';

//We create a Context with some global data
//which should be shared between multiple React components.
const appContext = createContext({
  count: 0,
  setCount: () => {},
});

export default appContext;
