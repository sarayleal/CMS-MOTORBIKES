import './Login.css';

import { useContext, useRef } from 'react';

import { UserContext } from '../../components/context/userContext';

const Login = () => {
  const inputRef = useRef(null);
  const inputPassRef = useRef(null);
  const { login } = useContext(UserContext);

  return (
    <main className="Login">
      <div className="DivLogin">
        <h3>Usuario</h3>
        <input type="text" placeholder="Username" ref={inputRef} />
        <h3>contraseña</h3>
        <input type="password" placeholder="Password" ref={inputPassRef} />
        <button
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
