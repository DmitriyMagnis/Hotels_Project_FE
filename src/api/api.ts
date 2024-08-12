import type { ResponseCities, ResponseHotels } from '@/appTypes';
import axios, {
  type Axios,
  type AxiosRequestConfig,
  type CreateAxiosDefaults,
} from 'axios';

const makeApi = (config: CreateAxiosDefaults) => {
  const instance = axios.create(config);

  return {
    getCities: (data?: AxiosRequestConfig) => {
      return instance.get<ResponseCities[]>('/cities/all', data);
    },
    getHotels: (data?: AxiosRequestConfig) => {
      return instance.get<ResponseHotels[]>('/hotels/all', data);
    },
  };
};

const api = makeApi({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer some token',
  },
});

export default api;
