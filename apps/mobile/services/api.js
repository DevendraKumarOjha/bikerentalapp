import axios from 'axios';
import Constants from 'expo-constants';

const apiBaseURL =
  process.env.EXPO_PUBLIC_API_URL ||
  Constants.expoConfig?.extra?.apiBaseUrl ||
  'http://192.168.1.3:3002/api';

export default axios.create({
  baseURL: apiBaseURL,
  timeout: 15000,
});
