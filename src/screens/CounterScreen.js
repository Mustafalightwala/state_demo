import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Button from '../components/Button';
import {Increment} from '../actions/index';

const CounterScreen = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(Increment(1));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.count}>Count: {count}</Text>
      <Button text={'Increment'} onTouch={increment} />
    </View>
  );
};

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
