import axios from 'axios';
import endPoints from '../constants/apiEndPoints';

// redux impo
import {store} from '../store/store';
import {logout} from '../store/action/user';

//third party
import RNRestart from 'react-native-restart';

// setup base thing
const apiRequest = axios.create({
  baseURL: endPoints.BASE_URL,
  responseType: 'json',
  headers: {'Content-Type': 'application/json'},
});

apiRequest.interceptors.response.use(
  response => {
    if (response.status == 200) {
      return Promise.resolve(response);
    }
  },
  error => {
    // todo for login
    if (error.response.status == 401) {
    }
    return Promise.reject(error.response);
  },
);

export default apiRequest;
