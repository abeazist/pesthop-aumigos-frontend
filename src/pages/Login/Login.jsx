import "./Login.css";
import snoopy from "../../assets/snoopy.png";

export default function Login() {
  return (
    <div className="login-container">
      <img src={snoopy} alt="Topo" className="login-image" />

      <div className="login-box">
        <div className="input-group">
          <input type="email" placeholder="E-mail" />
        </div>

        <div className="input-group">
          <input type="password" placeholder="Senha" />
        </div>

        <button className="login-button">Login</button>

        <a href="#" className="create-account">Criar Conta</a>
        
      </div>
    </div>
  );
}
