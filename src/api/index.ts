import axios, { type AxiosRequestConfig } from 'axios';

import { store } from '@store/store';
import { changeLoading } from '@/pages/App/store/appSlice';

// define common config for Axios
const instanceAxios = {
  baseURL: import.meta.env.VITE_APP_API,
};

const axiosConfig = axios.create(instanceAxios);

const request = ({ method, url, data, ...rest }: AxiosRequestConfig) =>
  axiosConfig({ method, url, data, ...rest });

const requestToken = ({ method, url, data, ...rest }: AxiosRequestConfig) => {
  let token = localStorage.getItem('token');

  return axiosConfig({
    method,
    url,
    data,
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    ...rest,
  });
};

const axiosConfigInterceptor = axios.create(instanceAxios);

// Add a request interceptor before request is handled
axiosConfigInterceptor.interceptors.request.use(
  async function (config) {
    // display loading before request is sent
    store.dispatch(changeLoading(true));
    // delay time
    await new Promise((resolve) => setTimeout(resolve, 300));

    return config;
  },
  function (error) {
    // hide loading if request fails
    store.dispatch(changeLoading(false));

    return Promise.reject(error);
  },
);

// Add a request interceptor before response is handled
axiosConfigInterceptor.interceptors.response.use(
  async function (response) {
    // display loading before request is sent
    store.dispatch(changeLoading(false));
    // delay time
    // await new Promise((resolve) => setTimeout(resolve, 300));

    return response;
  },
  function (error) {
    // hide loading if request fails
    store.dispatch(changeLoading(false));

    return Promise.reject(error);
  },
);

const requestInterceptor = ({
  method,
  url,
  data,
  ...rest
}: AxiosRequestConfig) =>
  axiosConfigInterceptor({
    method,
    url,
    data,
    withCredentials: true,
    ...rest,
  });

const requestTokenInterceptor = ({
  method,
  url,
  data,
  ...rest
}: AxiosRequestConfig) => {
  let token = localStorage.getItem('token');

  return axiosConfigInterceptor({
    method,
    url,
    data,
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
      ...rest.headers,
    },
    ...rest,
  });
};

export { request, requestToken, requestInterceptor, requestTokenInterceptor };
