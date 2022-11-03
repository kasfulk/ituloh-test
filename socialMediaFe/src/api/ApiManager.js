const axios = require('axios').default;

const ApiManager = axios.create({
  baseURL: 'http://192.168.1.2:3000',
});

export default ApiManager;
