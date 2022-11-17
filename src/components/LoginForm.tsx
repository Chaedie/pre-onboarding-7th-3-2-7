import { useRouter } from 'next/router';
import { ChangeEvent, FormEvent, useState } from 'react';
import { postLogin, postSignUp } from '../apis/http';

function LoginForm() {
  const [inputs, setInputs] = useState({ email: '', password: '' });
  const router = useRouter();

  const handleChangeInputs = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const [loginError, setLoginError] = useState(false);
  const handleOnSubmitLogin = (e: FormEvent) => {
    e.preventDefault();
    postLogin(inputs);
    router.push('/accounts');
  };
  const handleSignUp = () => {
    postSignUp(inputs);
    router.push('/accounts');
  };

  return (
    <div className="bg-white shadow-lg w-1/3 min-h-2/3">
      <header className="px-5 py-1 border-b border-black-500">로그인</header>
      <form className="flex flex-col m-5" onSubmit={handleOnSubmitLogin}>
        <input
          className="my-1 border"
          onChange={handleChangeInputs}
          value={inputs.email}
          name="email"
          type="email"
          minLength={4}
          maxLength={30}
          placeholder="아이디를 입력하세요"
          autoComplete="username"
        />
        <input
          className="my-1 border"
          onChange={handleChangeInputs}
          value={inputs.password}
          name="password"
          type="password"
          minLength={8}
          maxLength={30}
          placeholder="아이디를 입력하세요"
          autoComplete="current-password"
        />
        {loginError && <span className="text-red">Error</span>}
        <input
          className="my-1 border bg-gray-100"
          type="submit"
          value="로그인"
        />
      </form>
      <input
        className="my-1 border bg-gray-100"
        type="submit"
        value="회원가입"
        onClick={handleSignUp}
      />
    </div>
  );
}

export default LoginForm;
