import { useEffect, useRef, useState } from 'react';
import { getAccounts } from '../apis/http';

interface Account {
  id: number;
  user_id: number;
  user_name: string;
  uuid: string;
  broker_id: number;
  status: number;
  number: string;
  name: string;
  assets: string;
  payments: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

function Accounts() {
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

  return (
    <div className="text-black-100">
      <h1>Accounts</h1>
      <table>
        <thead className="border overflow-scroll">
          <tr className="border">
            {TABLE_HEADS.map(head => (
              <th key={head} className="border p-2">
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white border p-2">
          {accounts?.map(row => {
            const {
              uuid,
              user_name,
              broker_id,
              number,
              status,
              name,
              assets,
              payments,
              is_active,
              created_at,
            } = row;
            return (
              <tr key={uuid} className="border p-2">
                <td className="border p-2">{user_name}</td>
                <td className="border p-2">{ACCOUNT_BROKER[broker_id]}</td>
                <td className="border p-2">{hideAccountNumber(number)}</td>
                <td className="border p-2">{ACCOUNT_STATUS[status]}</td>
                <td className="border p-2">{name}</td>
                <td
                  className={`border p-2 ${getAssetsColor(assets, payments)}`}
                >
                  {toCommaNumber(assets)}
                </td>
                <td className="border p-2">{toCommaNumber(payments)}</td>
                <td className="border p-2">{is_active}</td>
                <td className="border p-2">{created_at}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination">
        {Array(totalPageCount.current)
          .fill('')
          .map((x, i) => (
            <span
              className="px-1 cursor-pointer"
              onClick={(e: any) => setPage(e.target.innerHTML)}
              key={i + 1}
            >
              {i + 1}
            </span>
          ))}
      </div>
    </div>
  );
}

export default Accounts;

const PAGINATION_LIMIT = 20;
const toCommaNumber = (str: string) => {
  return parseInt(str).toLocaleString();
};
const getAssetsColor = (assets, payments) => {
  const assetsNum = parseInt(assets);
  const paymentsNum = parseInt(payments);
  if (assetsNum > paymentsNum) {
    return 'text-red-700';
  } else if (assetsNum === paymentsNum) {
    return 'text-black-100';
  } else {
    return 'text-blue-700';
  }
};

const hideAccountNumber = (accountNum: string) => {
  return accountNum
    .split('')
    .map((x, i) => {
      if (i > 1 && i < accountNum.length - 2) {
        return '*';
      }
      return x;
    })
    .join('');
};

const TABLE_HEADS = [
  '고객명',
  '브로커명',
  '계좌번호',
  '계좌상태',
  '계좌명',
  '평가금액',
  '입금금액',
  '계좌 활성화 여부',
  '계좌 개설일',
];

const ACCOUNT_STATUS: Record<number, string> = {
  9999: '관리자 확인 필요',
  1: '입금대기',
  2: '운용중',
  3: '투자중지',
  4: '해지',
};

const ACCOUNT_BROKER: Record<string, string> = {
  '209': '유안타증권',
  '218': '현대증권',
  '230': '미래에셋증권',
  '238': '대우증권',
  '240': '삼성증권',
  '243': '한국투자증권',
  '247': '우리투자증권',
  '261': '교보증권',
  '262': '하이투자증권',
  '263': 'HMC투자증권',
  '264': '키움증권',
  '265': '이베스트투자증권',
  '266': 'SK증권',
  '267': '대신증권',
  '268': '아이엠투자증권',
  '269': '한화투자증권',
  '270': '하나대투자증권',
  '279': '동부증권',
  '280': '유진투자증권',
  '288': '카카오페이증권',
  '287': '메리츠종합금융증권',
  '290': '부국증권',
  '291': '신영증권',
  '292': 'LIG투자증권',
  '271': '토스증권',
};
