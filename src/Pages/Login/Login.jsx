import './Login.css';

const Login = () => {
  return (
    <main className="Login">
      <div className="DivLogin">
        <h3>Usuario</h3>
        <input type="text" />
        <h3>contraseña</h3>
        <input type="password" />
        <button>Login</button>
      </div>
    </main>
  );
};
export default Login;
