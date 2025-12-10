import "./Login.css";
import snoopy from "../../assets/snoopy.png";
import { useState } from "react";
import { NavLink } from 'react-router-dom'

export default function Login() {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function handleLogin() {
    try {
      // const response = await fetch(import.meta.env.VITE_API_URL+ "api/login", {
      const response = await fetch("https://petshop-aumigos-backend.onrender.com/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, senha })
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error || "Erro no login");
      }

      const data = await response.json();

      // salvar token
      localStorage.setItem("token", data.token);

      alert("Login realizado com sucesso!");
      console.log("Usuário logado:", data.usuario);

    } catch (err) {
      alert(err.message || "Email ou senha inválidos!");
      console.error(err);
    }
  }

  return (
    <div className="login-container">
      <img src={snoopy} alt="Topo" className="login-image" />

      <div className="login-box">
        <div className="input-group">
          <input 
            type="email" 
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-group">
          <input 
            type="password" 
            placeholder="Senha"
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>

        <button className="login-button" onClick={handleLogin}>
          Login
        </button>

        {/* <a className="create-account">Criar Conta</a> */}

        <NavLink to="/CadastroTutor" className="create-account">
        Criar Conta
        </NavLink>
      </div>
    </div>
  );
}
