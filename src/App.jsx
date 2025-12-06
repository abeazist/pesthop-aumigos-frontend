import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home'
import PerfilTutor from './pages/Perfil/PerfilTutor'
import PerfilPet from './pages/Perfil/PerfilPet'
import Agendamento from "./pages/Agendamento/Agendamento";
import Login from "./pages/Login/Login";
import Historico from "./pages/Histórico/Historico";
import Layoutbase from "./components/Layoutbase";
import EdicaoPet from "./pages/Edicao/EdicaoPet";
import EdicaoTutor from "./pages/Edicao/EdicaoTutor";
import CadastroPet from "./pages/Cadastro/CadastroPet";
import CadastroTutor from "./pages/Cadastro/CadastroTutor";
import ListaTutor from "./pages/Lista/ListaTutor";
import ListaPet from "./pages/Lista/ListaPet";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />

        <Route path="Home" element={<Home />} />
        <Route path="/" element={<Home />} />

        {/* <Route path="/" element={<Home />}/> */}
        <Route element={<Layoutbase />}>
          <Route path="CadastroTutor" element={<CadastroTutor />} />
          <Route path="Agendamento" element={<Agendamento />} />
          <Route path="CadastroPet" element={<CadastroPet />} />
          <Route path="Historico" element={<Historico />} />
          <Route path="ListaTutor" element={<ListaTutor />} />
          <Route path="ListaPet" element={<ListaPet />} />
          <Route path="PerfilTutor" element={<PerfilTutor />} />
          <Route path="PerfilPet" element={<PerfilPet />} />
          <Route path="EdicaoPet" element={<EdicaoPet />} />
          <Route path="EdicaoTutor" element={<EdicaoTutor />} />
          <Route path="EdicaoTutor/:id" element={<EdicaoTutor />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;