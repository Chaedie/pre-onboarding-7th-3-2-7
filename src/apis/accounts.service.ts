import { PAGINATION_LIMIT } from '../utils/varibales';
import { http } from './_http';

export const getAccounts = async (page: number) => {
  const url = `/api/accounts`;
  try {
    const res = await http.get(url, {
      params: {
        _page: page,
        _limit: PAGINATION_LIMIT,
      },
    });
    return res;
  } catch (error) {
    console.error('에러발생', error);
  }
};
