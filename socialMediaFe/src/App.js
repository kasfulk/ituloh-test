import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Routers from './routers';

const App = () => {
  return (
    <NavigationContainer style={styles.container}>
      <Routers />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#444444',
  },
});

export default App;
