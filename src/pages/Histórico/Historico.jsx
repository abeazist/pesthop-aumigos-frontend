import "./Historico.css";

export default function HistoricoAgendamentos() {
  return (
    <div className="historico-container">

      <h1 className="titulo">Histórico de Agendamentos</h1>

      <div className="filtro-box">
        <span>Agendamentos entre</span>
        <input type="date" />
        <span>até</span>
        <input type="date" />
        <button>Pesquisar</button>
      </div>

      <div className="tabela-box">
        <table>
          <thead>
            <tr>
              <th>PET</th>
              <th>DATA</th>
              <th>HORA</th>
              <th>SERVIÇO</th>
              <th>VALOR</th>
              <th>STATUS</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>123234</td>
              <td>01/11/2024</td>
              <td>09:30</td>
              <td>Banho</td>
              <td>30,00</td>
              <td>Em Andamento</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}
