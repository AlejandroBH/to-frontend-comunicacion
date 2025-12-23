import LoginForm from "../components/common/LoginForm";
import "../styles/login.css";

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="login-title">Iniciar sesion</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
