import { useState } from "react";
import "./Agendamento.css";
import snoopy from "../../assets/snoopy.png";

export default function Agendamento() {
  const [form, setForm] = useState({
    nomePet: "",
    simpatinhas: "",
    cpfTutor: "",
    telefone: "",
    servico: "",
    dataAgendamento: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit() {
    try {
      const res = await fetch("http://localhost:3000/agendamentos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      console.log("Agendado:", data);

      alert("Agendamento realizado!");
    } catch (error) {
      console.error(error);
      alert("Erro ao agendar");
    }
  }

  return (
    <div className="page-agendamento">
      <h1 className="page-title">Agendamento</h1>

      <div className="agendamento-card">

        <div className="form-row">
          <div>
            <label>Nome Pet</label>
            <input 
              type="text"
              name="nomePet"
              value={form.nomePet}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Simpatinhas</label>
            <input 
              type="text"
              name="simpatinhas"
              value={form.simpatinhas}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div>
            <label>CPF Tutor</label>
            <input 
              type="text"
              name="cpfTutor"
              value={form.cpfTutor}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Telefone</label>
            <input 
              type="text"
              name="telefone"
              value={form.telefone}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div>
            <label>Serviço</label>
            <input 
              type="text"
              name="servico"
              value={form.servico}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Data Agendamento</label>
            <input 
              type="date"
              name="dataAgendamento"
              value={form.dataAgendamento}
              onChange={handleChange}
            />
          </div>
        </div>

        <button className="btn-primary" onClick={handleSubmit}>Agendar</button>
        <button className="btn-secondary">Cancelar</button>
      </div>

      <img className="snoopy" src={snoopy} alt="Snoopy" />
    </div>
  );
}
