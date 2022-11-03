import AsyncStorage from '@react-native-async-storage/async-storage';
import {user_login} from '../../api/UserApi';
import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Eye, EyeActive} from '../../assets';

export default function Login({navigation}) {
  const [password, setPassword] = useState('');
  const [username, setUserName] = useState('');
  const [seePassword, setSeePassword] = useState(true);

  const handleLogin = () => {
    user_login({
      username: username.toLowerCase(),
      password: password,
    })
      .then(result => {
        if (result.status === 200) {
          AsyncStorage.setItem('AccessToken', result.data.access_token);
          navigation.replace('Home');
        }
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapperInput}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={text => setUserName(text)}
        />
      </View>
      <View style={styles.wrapperInput}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          secureTextEntry={seePassword}
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity
          style={styles.wrapperIcon}
          onPress={() => setSeePassword(!seePassword)}>
          <Image source={seePassword ? Eye : EyeActive} style={styles.icon} />
        </TouchableOpacity>
      </View>
      {username === '' || password === '' ? (
        <TouchableOpacity
          disabled
          style={styles.buttonDisable}
          onPress={handleLogin}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#444444',
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  wrapperInput: {
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: 'grey',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    padding: 10,
    width: '100%',
  },
  wrapperIcon: {
    position: 'absolute',
    right: 0,
    padding: 10,
  },
  icon: {
    width: 30,
    height: 24,
  },
  button: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
    borderRadius: 5,
    marginTop: 25,
  },
  buttonDisable: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
    borderRadius: 5,
    marginTop: 25,
  },
  text: {
    color: 'white',
    fontWeight: '700',
  },
  textFailed: {
    alignSelf: 'flex-end',
    color: 'red',
  },
});
