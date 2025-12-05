import './EdicaoTutor.css'
import { Camera } from "phosphor-react";
import { NavLink } from 'react-router-dom'

export default function EdicaoTutor() {

    const navigate = useNavigate();

    // pega usuário logado
    const usuarioLogado = JSON.parse(localStorage.getItem("usuario"));
    const token = localStorage.getItem("token");

    // estados dos campos
    const [form, setForm] = useState({
        nome: "",
        cpf: "",
        telefone: "",
        endereco: "",
        bairro: "",
        numero: "",
    });

    // carregar dados do usuário ao abrir a tela
    useEffect(() => {
        async function carregarDados() {
            try {
                const response = await fetch(`http://localhost:3000/api/usuario/${usuarioLogado.idUsuario}`);

                const data = await response.json();

                setForm({
                    nome: data.nome || "",
                    cpf: data.cpf || "",
                    telefone: data.telefone || "",
                    endereco: data.endereco || "",
                    bairro: data.bairro || "",
                    numero: data.numero || ""
                });
            } catch (error) {
                console.error("Erro ao carregar dados:", error);
            }
        }

        carregarDados();
    }, []);

    // atualizar estado nos inputs
    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    // enviar atualização
    async function handleSalvar() {
        try {
            const response = await fetch(
                `http://localhost:3000/api/usuario/${usuarioLogado.idUsuario}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },
                    body: JSON.stringify(form)
                }
            );

            if (!response.ok) {
                alert("Erro ao salvar alterações!");
                return;
            }

            const atualizado = await response.json();

            // atualiza o localStorage para refletir as mudanças
            localStorage.setItem("usuario", JSON.stringify(atualizado));

            alert("Alterações salvas com sucesso!");
            navigate("/PerfilTutor");

        } catch (error) {
            console.error(error);
            alert("Erro de conexão ao atualizar!");
        }
    }

    return (
        <div className='boxCadastroPet'>
            <div className='formulario'>
                <h3>Edição Tutor</h3>
                <div className='f1'>
                    <div id='inputBox1'>
                        <div id='cadFotoTutor'>
                            <Camera size={32} />
                        </div>
                    </div>
                    <div id='inputBox2'>
                        <label htmlFor="">Nome</label>
                        <input name="nome" type="text" value={form.nome} className='inputFormulario' onChange={handleChange}/>
                        <br />
                        <label htmlFor="">CPF</label>
                        <input name="cpf" type="text" value={form.nome} className='inputFormulario' onChange={handleChange} />

                        <label>Email</label>
                        <input name="email" type="email" className='inputFormulario' onChange={handleChange} />

                        <label>Senha</label>
                        <input name="senha" type="password" className='inputFormulario' onChange={handleChange} />
                    </div>
                </div>
                <div className='f2'>
                    <div id='inputBox3'>
                        <label htmlFor="">Telefone</label>
                        <input name="telefone" type="text" value={form.nome} className='inputFormulario' onChange={handleChange}/>
                        <br />
                        <label htmlFor="">Rua</label>
                        <input name="rua" type="text" value={form.nome} className='inputFormulario' onChange={handleChange}/>
                    </div>
                    <div id='inputBox4'>
                        <label htmlFor="">Bairro</label>
                        <input name="bairro" type="text" value={form.nome} className='inputFormulario' onChange={handleChange}/>
                        <br />
                        <label htmlFor="">Número</label>
                        <input name="numero" type="number" value={form.nome} className='inputFormulario' onChange={handleChange}/>
                    </div>
                </div>

                <NavLink to="/PerfilTutor" className="btnLink">
                    <button id='btSalvaAlteracao' onClick={handleSalvar}>Salvar Alterações</button>
                </NavLink>

                <NavLink to="/ListaTutor" className="btnLink">
                    <button id='btCancela'>Cancelar</button>
                </NavLink>
            </div>

        </div>
    )


}