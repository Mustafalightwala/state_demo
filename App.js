import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from './src/components/Button';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.count}>Count: </Text>
      <Button text={'Increment'} />
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

export default App;
