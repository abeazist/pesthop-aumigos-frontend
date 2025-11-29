import "./Agendamento.css";
import snoopy from "../../assets/snoopy.png"; 

export default function Agendamento() {
  return (
    <div className="page-agendamento">

      <h1 className="page-title">Agendamento</h1>

      <div className="agendamento-card">

        <div className="form-row">
          <div>
            <label>Nome Pet</label>
            <input type="text" />
          </div>
          <div>
            <label>Simpatinhas</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-row">
          <div>
            <label>CPF Tutor</label>
            <input type="text" />
          </div>
          <div>
            <label>Telefone</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-row">
          <div>
            <label>Serviço</label>
            <input type="text" />
          </div>
          <div>
            <label>Data Agendamento</label>
            <input type="date" />
          </div>
        </div>

        <button className="btn-primary">Agendar</button>
        <button className="btn-secondary">Cancelar</button>
      </div>

      <img className="snoopy" src={snoopy} alt="Snoopy" />

    </div>
  );
}
