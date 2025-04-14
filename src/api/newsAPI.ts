import axios from 'axios';
import { API_URL, AUTH_HEADER } from 'src/utils/constants';

export const getNewsList = () => {
  return axios.get(`${API_URL}/news/v1/article/list`, {
    headers: {
      ...AUTH_HEADER,
    },
  });
};
