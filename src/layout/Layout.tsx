import { PropsWithChildren } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sider from '../components/Sider';

function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex w-screen">
      <Sider />
      <div className="flex flex-col w-full">
        <Header />
        <div className="bg-gray-100">{children}</div>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
