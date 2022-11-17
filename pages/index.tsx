import LoginForm from '../src/components/LoginForm';

export default function Home() {
  return (
    <div className="h-screen bg-gray-100 flex flex-col justify-center items-center overflow-auto">
      <h1 className="text-5xl mb-10 text-blue-900 font-bold">LOGO</h1>
      <LoginForm />
    </div>
  );
}
