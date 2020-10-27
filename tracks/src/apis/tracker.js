import { AsyncStorage } from 'react-native';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://16300a1769b5.ngrok.io',
});

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
