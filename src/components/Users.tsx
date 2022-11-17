import { getUsers } from '../apis/users.service';
import useFetch from '../hooks/useFetch';
import { USERS_TABLE_HEADS } from '../utils/varibales';

function Users() {
  const { state, totalPageCount, setPage } = useFetch(getUsers);
  const users = state;

  return (
    <div className="text-black-100">
      <h1>USERS</h1>
      <table>
        <thead className="border overflow-scroll">
          <tr className="border">
            {USERS_TABLE_HEADS.map(head => (
              <th key={head} className="border p-2">
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white border p-2">
          {users?.map((row, i) => {
            const {
              name,
              account_count,
              email,
              gender_origin,
              birth_date,
              phone_number,
              last_login,
              allow_marketing_push,
              is_active,
              created_at,
            } = row;
            return (
              <tr key={i} className="border p-2">
                <td className="border p-2">{name}</td>
                <td className="border p-2">{account_count}</td>
                <td className="border p-2">{email}</td>
                <td className="border p-2">{gender_origin}</td>
                <td className="border p-2">{birth_date}</td>
                <td className="border p-2">{phone_number}</td>
                <td className="border p-2">{last_login}</td>
                <td className="border p-2">{allow_marketing_push}</td>
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

export default Users;
