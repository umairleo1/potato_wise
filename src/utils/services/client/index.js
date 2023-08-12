/* eslint-disable no-dupe-keys */
import axios from 'axios';

const request = axios.create({
  baseURL: 'https://us-central1-clear-truth-394015.cloudfunctions.net',
  headers: {
    'Content-Type': 'multipart/form-data',
    // 'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

const onSuccess = function (response) {
  // console.log(response);
  return response.data;
};

const onError = function (error) {
  console.log('Request Failed:', error);
  if (error.response) {
    console.log(error.response);
  }

  return Promise.reject({
    errMsg: !error?.response
      ? 'Network Issue!'
      : error?.response?.data?.error
      ? error?.response?.data?.error
      : 'Server Error',
    status: error?.response?.status,
  });
};

request.interceptors.response.use(onSuccess, onError);

// request.interceptors.request.use(
//   async config => {
//     config.headers['x-auth-token'] = 'user';

//     return config;
//   },
//   error => Promise.reject(error),
// );

export default request;
