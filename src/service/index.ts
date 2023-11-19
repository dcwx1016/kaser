import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://139.196.98.255:3002/api',
  // baseURL: 'http://127.0.0.1:3002/api',
});

instance.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return response.data;
    }
  },
  (error) => {
    return Promise.reject(error.message);
  },
);

type Message = {
  role: 'user' | 'assistant' | 'system';
  content: string;
};

export const getTextGeneration = (messages: Message[]) => {
  return instance.post('/generate', { messages });
};
