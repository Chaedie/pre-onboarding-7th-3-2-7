import { useEffect, useRef, useState } from 'react';
import { PAGINATION_LIMIT } from '../utils/varibales';

function useFetch(apiFunction: any) {
  const [state, setState] = useState([]);
  const [page, setPage] = useState(1);
  const totalPageCount = useRef(0);

  useEffect(() => {
    const fetchData = async () => {
      const res = await apiFunction(page);
      if (res?.headers['x-total-count']) {
        totalPageCount.current = ~~(
          parseInt(res.headers['x-total-count']) / PAGINATION_LIMIT
        );
      }
      if (res?.data) {
        setState(res.data);
      }
    };
    fetchData();
  }, [page, apiFunction]);

  return { state, totalPageCount, setPage };
}

export default useFetch;
