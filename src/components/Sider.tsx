function Sider() {
  return (
    <aside className="p-5 bg-darkblue-100 h-screen">
      <h1 className="text-5xl mb-10 text-white font-bold">LOGO</h1>
      <ul className="px-5 text-gray-400">
        <li className="py-1">대시보드</li>
        <li className="py-1">계좌 목록</li>
        <li className="py-1">사용자</li>
        <li
          className="py-1"
          onClick={() => localStorage.removeItem('ACCESS_TOKEN')}
        >
          로그아웃
        </li>
      </ul>
    </aside>
  );
}

export default Sider;
