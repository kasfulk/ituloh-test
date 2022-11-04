const axios = require('axios').default;
import AsyncStorage from '@react-native-async-storage/async-storage';

const ApiManager = axios.create({
  baseURL: 'http://192.168.1.2:3000',
  responseType: 'json',
  withCredentials: true,
  headers: {
    'content-type': 'application/json',
    Accept: 'application/json',
  },
});

ApiManager.interceptors.request.use(
  async config => {
    const token = JSON.parse(await AsyncStorage.getItem('AccessToken'));

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    // Do something with request error
    return Promise.reject(error);
  },
);

ApiManager.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response.status === 401) {
      AsyncStorage.clear();
    }
    return Promise.reject(error);
  },
);

export default ApiManager;
