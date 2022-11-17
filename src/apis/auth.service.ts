import { setToken } from '../utils/functions';
import { http } from './_http';

interface AuthInputs {
  email: string;
  password: string;
}

export const postLogin = async (authInputs: AuthInputs) => {
  const url = `/api/login`;
  try {
    const res = await http.post(url, authInputs);
    if (res.status === 200) {
      setToken(res.data.accessToken);
    }
    return true;
  } catch (error) {
    console.error('에러발생', error);
    return false;
  }
};
export const postSignUp = async (authInputs: AuthInputs) => {
  const url = `/api/users/signup`;
  try {
    const res = await http.post(url, authInputs);
    if (res.status === 200) {
      setToken(res.data.accessToken);
    }
    return true;
  } catch (error) {
    console.error('에러발생', error);
    return false;
  }
};
