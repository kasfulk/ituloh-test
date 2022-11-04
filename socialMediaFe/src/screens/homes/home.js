import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function Home({navigation}) {
  const handleLogout = () => {
    AsyncStorage.clear();
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewContainer}>
        <Text style={styles.text}>Home</Text>
        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.textButton}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewContainer: {
    flex: 1,
    padding: 20,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'orange',
  },
  button: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
    borderRadius: 5,
    marginTop: 25,
  },
  textButton: {
    color: 'white',
    fontWeight: '700',
  },
});
