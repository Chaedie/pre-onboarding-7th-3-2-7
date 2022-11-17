import { useEffect, useRef, useState } from 'react';
import { getAccounts } from '../apis/http';
import { Account } from '../models/account';
import { PAGINATION_LIMIT } from '../utils/varibales';

function useFetchAccount() {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [page, setPage] = useState(1);
  const totalPageCount = useRef(0);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAccounts(page);
      if (res?.headers['x-total-count']) {
        totalPageCount.current = ~~(
          parseInt(res.headers['x-total-count']) / PAGINATION_LIMIT
        );
      }
      if (res?.data) {
        setAccounts(res.data);
      }
    };
    fetchData();
  }, [page]);

  return { accounts, totalPageCount, setPage };
}

export default useFetchAccount;
