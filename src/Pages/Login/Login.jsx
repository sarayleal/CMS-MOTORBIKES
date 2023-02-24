import './Login.css';

import { useContext, useRef } from 'react';

import { UserContext } from '../../components/context/userContext';

const Login = () => {
  const inputRef = useRef(null);
  const inputPassRef = useRef(null);
  const { login } = useContext(UserContext);

  return (
    <main className="container">
      <div className="card">
        <h1 className="login">Log in</h1>
        <div className="inputBox">
          <input type="text" ref={inputRef} required />
          <span>Username</span>
        </div>
        <div className="inputBox">
          <input type="password" ref={inputPassRef} required />
          <span>Password</span>
        </div>
        <button
          className="enter"
          onClick={() =>
            inputRef.current.value &&
            inputPassRef.current.value &&
            login(inputRef.current.value, inputPassRef.current.value)
          }
        >
          Login
        </button>
      </div>
    </main>
  );
};
export default Login;
