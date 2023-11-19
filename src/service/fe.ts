import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://dashscope.aliyuncs.com/api/v1/services/aigc',
  headers: {
    Authorization: 'sk-5b5108a9385a44eebd332cdad6dd145b',
  },
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
