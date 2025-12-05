import { useEffect, useState } from "react";
import "./ListaTutor.css";

export default function ListaTutor() {
  const [tutores, setTutores] = useState([]);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    //depois troca pela API real
    setTutores([
      {
        id: 1,
        nome: "Marcos Silva",
        telefone: "(11) 90000-0000",
        email: "marcos@gmail.com",
        cpf: "123.456.789-00"
      },
      {
        id: 2,
        nome: "Juliana Ribeiro",
        telefone: "(11) 98888-4444",
        email: "juliana@gmail.com",
        cpf: "321.654.987-11"
      },
      {
        id: 3,
        nome: "Fernanda Torres",
        telefone: "(11) 97777-2222",
        email: "fernanda@gmail.com",
        cpf: "555.666.777-88"
      },
      {
        id: 4,
        nome: "Carlos Andrade",
        telefone: "(11) 96666-9999",
        email: "carlos@gmail.com",
        cpf: "999.888.777-33"
      }
    ]);
  }, []);

  const filtrados = tutores.filter((t) =>
    t.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="listaTutor-container">
      <div className="listaTutor-header">
        <h2>Tutores</h2>
        <button className="btn-novo">Novo Tutor</button>
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
            <tr key={tutor.id}>
              <td>{tutor.nome}</td>
              <td>{tutor.telefone}</td>
              <td>{tutor.email}</td>
              <td>{tutor.cpf}</td>

              <td className="acoes">
                <button className="btn-edit">✏️</button>
                <button className="btn-delete">🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
