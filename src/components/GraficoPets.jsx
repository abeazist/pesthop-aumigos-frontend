import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function GraficoPets() {
  const [quantidade, setQuantidade] = useState(0);

  async function carregarDados() {
    try {
      const response = await fetch("http://localhost:8000/api/pet"); // 🔥 TROQUE AQUI o endpoint correto
      const pets = await response.json();

      setQuantidade(pets.length); // quantidade total
    } catch (err) {
      console.error("Erro ao carregar pets:", err);
    }
  }

  useEffect(() => {
    carregarDados();
  }, []);

  const dados = {
    labels: ["Pets cadastrados"],
    datasets: [
      {
        label: "Quantidade total",
        data: [quantidade],
        backgroundColor: "#4B8BF5",
      },
    ],
  };

  const opcoes = {
    responsive: true,
    plugins: {
      legend: { display: true },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <div style={{ width: "500px", margin: "0 auto" }}>
      <Bar data={dados} options={opcoes} />
    </div>
  );
}
