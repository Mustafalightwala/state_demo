import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import appContext from '../context/Context';
import Button from '../components/Button';

//You can consume the Counter Context any way you want such as Provider.Consumer or React.useContext
//Since it's a functional component we make of react useContext Hook.
const CounterScreen = () => {
  const {count, setCount} = useContext(appContext);
  return (
    <View style={styles.container}>
      <Text style={styles.count}>Count: {count}</Text>
      <Button
        text={'Increment'}
        onTouch={() => {
          setCount((c) => c + 1);
        }}
      />
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
