import Link from 'next/link';
import { useRouter } from 'next/router';
import { removeToken } from '../utils/functions';

function Sider() {
  const router = useRouter();
  const handleLogout = () => {
    removeToken();
    router.push('/');
  };

  return (
    <aside className="p-5 bg-darkblue-100 h-screen">
      <h1 className="text-5xl mb-10 text-white font-bold">LOGO</h1>
      <ul className="px-5 text-gray-400">
        <li className="py-1">대시보드</li>

        <Link href="accounts">
          <li
            className={`py-1 my-1 ${
              router.pathname === '/accounts' ? 'text-white' : ''
            }`}
          >
            계좌 목록
          </li>
        </Link>
        <Link href="users">
          <li
            className={`py-1 my-1 ${
              router.pathname === '/users' ? 'text-white' : ''
            }`}
          >
            사용자
          </li>
        </Link>
        <li className="py-1 my-1 cursor-pointer" onClick={handleLogout}>
          로그아웃
        </li>
      </ul>
    </aside>
  );
}

export default Sider;
