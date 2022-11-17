import { getAccounts } from '../apis/accounts.service';
import useFetch from '../hooks/useFetch';
import {
  getAssetsColor,
  hideAccountNumber,
  toCommaNumber,
} from '../utils/functions';
import { BROKER, STATUS, ACCOUNTS_TABLE_HEADS } from '../utils/varibales';

function Accounts() {
  const { state, totalPageCount, setPage } = useFetch(getAccounts);
  const accounts = state;
  return (
    <div className="text-black-100">
      <h1>Accounts</h1>
      <table>
        <thead className="border overflow-scroll">
          <tr className="border">
            {ACCOUNTS_TABLE_HEADS.map(head => (
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
                <td className="border p-2">{BROKER[broker_id]}</td>
                <td className="border p-2">{hideAccountNumber(number)}</td>
                <td className="border p-2">{STATUS[status]}</td>
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
