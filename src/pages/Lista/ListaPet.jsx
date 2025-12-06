import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Trash, PencilSimple } from "phosphor-react";
import api from "../../services/api";
import "./ListaPet.css";

export default function ListaPet() {

  const [pets, setPets] = useState([]);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    listarPets();
  }, []);

  async function listarPets() {
    try {
      const response = await api.get("http://localhost:8000/api/pet");
      setPets(response.data);
    } catch (error) {
      console.error("Erro ao carregar pets:", error);
    }
  }
  console.log("pets =", pets);

  const filtrados = pets.filter((p) =>
    p.nome.toLowerCase().includes(busca.toLowerCase())
  );

  async function excluirPet(idPet) {
    if (!confirm("Tem certeza que deseja excluir este pet?")) return;

    try {
      await api.delete(`http://localhost:8000/api/pet/${idPet}`);
      setPets((prev) => prev.filter((p) => p.idPet !== idPet));
    } catch (error) {
      console.error("Erro ao excluir:", error);
    }
  }

  // const [pets, setPets] = useState([]);
  // const [busca, setBusca] = useState("");

  // useEffect(() => {
  //   // depois troca pela API
  //   setPets([
  //     {
  //       id: 1,
  //       nome: "Snoopy",
  //       simpatinhas: "00000",
  //       dono: "Charlie Brown",
  //       foto: ""
  //     },
  //     {
  //       id: 2,
  //       nome: "Belinha",
  //       simpatinhas: "00007",
  //       dono: "Marina",
  //       foto: ""
  //     }
  //   ]);
  // }, []);

  // const filtrados = pets.filter((p) =>
  //   p.nome.toLowerCase().includes(busca.toLowerCase())
  // );

  return (
    <div className="listaPets-container">
      <div className="listaPets-header">
        <h2>Pets</h2>

        <NavLink to="/CadastroPet" className="btn-novo">
          Novo Pet
        </NavLink>
      </div>

      <div className="filtro-area">
        <input
          type="text"
          placeholder="Buscar pet..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
        <button className="btn-filtrar">Filtrar</button>
      </div>

      <table className="pets-table">
        <thead>
          <tr>
            <th>Foto</th>
            <th>Nome</th>
            <th>Simpatinhas</th>
            <th>Tutor</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {filtrados.map((pet) => (
            <tr key={pet.idPet}>
              <td>
                <img src="frajola.jpg" alt="" className="pet-foto"/>
                {/* <img src={pet.foto} alt={pet.nome} className="pet-foto" /> */}
              </td>
              <td>{pet.nome}</td>
              <td>{pet.simpatinhas}</td>
              <td>{pet.dono}</td>

              <td className="acoes">
                <NavLink
                  to={`/EdicaoPet`}
                  //                  to={`/EdicaoPet/${pet.id}`}

                  className="btn-edit"
                >
                  <PencilSimple size={32} />
                </NavLink>

                <button className="btn-delete" onClick={() => excluirPet(pet.idPet)}><Trash size={32} /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
