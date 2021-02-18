import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useRecoilState} from 'recoil';
import {count} from '../atoms/index';
import Button from '../components/Button';

const CounterScreen = () => {
  //To read and write atom value we use the method useRecoilState that is similar to useState method.
  const [countState, setCount] = useRecoilState(count);
  return (
    <View style={styles.container}>
      <Text style={styles.count}>Count: {countState}</Text>
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
