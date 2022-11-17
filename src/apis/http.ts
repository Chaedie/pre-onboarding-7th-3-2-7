import axios from 'axios';

const http = axios.create({
  // baseURL: 'http://localhost:4000/api',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 1000,
});

interface AuthInputs {
  email: string;
  password: string;
}
http.interceptors.request.use(config => {
  if (config.headers) {
    config.headers.Authorization = `Bearer ${localStorage.getItem(
      'ACCESS_TOKEN'
    )}`;
  }
  return config;
});

export const postLogin = async (authInputs: AuthInputs) => {
  const url = `/api/login`;
  try {
    const res = await http.post(url, authInputs);
    if (res.status === 200) {
      localStorage.setItem('ACCESS_TOKEN', res.data.accessToken);
    }
  } catch (error) {
    console.error('에러발생', error);
  }
};
export const postSignUp = async (authInputs: AuthInputs) => {
  const url = `/api/users/signup`;
  try {
    const res = await http.post(url, authInputs);
    if (res.status === 200) {
      localStorage.setItem('ACCESS_TOKEN', res.data.accessToken);
    }
  } catch (error) {
    console.error('에러발생', error);
  }
};

export const getAccounts = async (page: number) => {
  const url = `/api/accounts`;
  try {
    const res = await http.get(url, {
      params: {
        _page: page,
        _limit: 20,
      },
    });
    return res;
  } catch (error) {
    console.error('에러발생', error);
  }
};
