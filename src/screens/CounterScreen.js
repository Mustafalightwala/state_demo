import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {observer} from 'mobx-react';
import Button from '../components/Button';

//Making the components reactive by wrapping them with the 'observer' function.
const CounterScreen = observer(({store}) => {
  const increment = () => {
    store.increment(1);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.count}>Count: {store.counter}</Text>
      <Button text={'Increment'} onTouch={increment} />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  count: {
    fontSize: 20,
    fontWeight: '600',
  },
});

export default CounterScreen;
