import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import api from "../../services/api";
import { Trash, PencilSimple } from "phosphor-react";
import "./ListaTutor.css";

export default function ListaTutor() {

  const [tutores, setTutores] = useState([]);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    listarTutores();
  }, []);

  async function listarTutores() {
    try {
      const response = await api.get("http://localhost:8000/api/usuario");
      setTutores(response.data);
    } catch (error) {
      console.error("Erro ao carregar tutores:", error);
    }
  }
  console.log("tutores =", tutores);

  const filtrados = tutores.filter((t) =>
    t.nome.toLowerCase().includes(busca.toLowerCase())
  );

  async function excluirTutor(idUsuario) {
    if (!confirm("Tem certeza que deseja excluir este Tutor?")) return;

    try {
      await api.delete(`http://localhost:8000/api/usuario/${idUsuario}`);
      setTutores((prev) => prev.filter((t) => t.idUsuario !== idUsuario));
    } catch (error) {
      console.error("Erro ao excluir:", error);
    }
  }

  return (
    <div className="listaTutor-container">
      <div className="listaTutor-header">
        <h2>Tutores</h2>

        <NavLink to="/CadastroTutor" className="btn-novo">
          Novo Tutor
        </NavLink>
      </div>

      <div className="filtro-area">
        <input
          type="text"
          placeholder="Buscar tutor..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
        <button className="btn-filtrar">Filtrar</button>
      </div>

      <table className="tutor-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Telefone</th>
            <th>E-mail</th>
            <th>CPF</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {filtrados.map((tutor) => (
            <tr key={tutor.idUsuario}>
              <td>{tutor.nome}</td>
              <td>{tutor.telefone}</td>
              <td>{tutor.email}</td>
              <td>{tutor.cpf}</td>

              <td className="acoes">
                <NavLink to={`/EdicaoTutor/${tutor.idUsuario}`} className="btn-edit"
                >
                  <PencilSimple size={32} />
                </NavLink>

                <button className="btn-delete" onClick={() => excluirTutor(tutor.idUsuario)}><Trash size={32} /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
