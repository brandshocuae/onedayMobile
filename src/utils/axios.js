import axios from 'axios';
import endPoints from '../constants/apiEndPoints';

// redux impo
import {store} from '../store/store';
import {logout} from '../store/action/user';

// setup base thing
const apiRequest = axios.create({
  baseURL: endPoints.BASE_URL,
  responseType: 'json',
  headers: {'Content-Type': 'multipart/form-data'},
});

apiRequest.interceptors.response.use(
  response => {
    if (response.status == 200) {
      //console.log('Interceptors response', response);
      return Promise.resolve(response);
    }
  },
  error => {
    // console.log('interceptors error', error, error.response.status);

    // todo for login
    if (error.response.status == 401 && error.response.data.code == 401) {
      store.dispatch(logout()); //Temporarily disabled this as other 401 calls logs out the user
      // alert(error.response.data.message);
    }
    return Promise.reject(error.response);
  },
);

export default apiRequest;
