import './EdicaoTutor.css'
import { Camera } from "phosphor-react";
import { NavLink, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';

export default function EdicaoTutor() {
    const { id } = useParams();
    const [form, setForm] = useState({
        nome: "",
        cpf: "",
        telefone: "",
        rua: "",
        endereco: "",
        bairro: "",
        numero: "",
        email: "",
        senha: ""
    });

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }
    useEffect(() => {
        async function carregarDados() {
            try {
                const response = await fetch(`http://localhost:8000/api/usuario/${id}`);
                const data = await response.json();

                let rua = "";
                let numero = "";
                let bairro = "";

                if (data.endereco) {
                    const [parte1, parte2] = data.endereco.split(" - ");

                    if (parte1) {
                        const partesRua = parte1.split(",");
                        rua = partesRua[0] ?? "";
                        numero = partesRua[1]?.trim() ?? "";
                    }

                    bairro = parte2 ?? "";
                }

                setForm({
                    nome: data.nome ?? "",
                    cpf: data.cpf ?? "",
                    telefone: data.telefone ?? "",
                    rua: rua,
                    numero: numero,
                    bairro: bairro,
                    email: data.email ?? "",
                    senha: data.senha ?? "",
                });
            } catch (error) {
                console.error("Erro ao carregar dados:", error);
            }
        }

        carregarDados();
    }, [id]);

    async function handleSalvar() {
        try {
            const enderecoFormatado = `${form.rua}, ${form.numero} - ${form.bairro}`;
            const dadosAtualizados = {
                nome: form.nome,
                cpf: form.cpf,
                telefone: form.telefone,
                email: form.email,
                senha: form.senha,
                endereco: enderecoFormatado
            };

            const response = await fetch(`http://localhost:8000/api/usuario/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(dadosAtualizados)
            });

            const result = await response.json();
            console.log("Salvo:", result);
            alert("Alterações salvas!");
        } catch (error) {
            console.error("Erro ao salvar:", error);
        }
    }

    return (
        <div className='boxCadastroPet'>
            <div className='formularioTutor'>
                <h3>Edição Tutor</h3>
                <div className='f1'>
                    <div id='inputBox1'>
                        <div id='cadFotoTutor'>
                            <Camera size={32} />
                        </div>
                    </div>
                    <div id='inputBox2'>
                        <label htmlFor="">Nome</label>
                        <input name="nome" type="text" value={form.nome} className='inputFormulario' onChange={handleChange} />
                        <br />
                        <label htmlFor="">CPF</label>
                        <input name="cpf" type="text" value={form.cpf} className='inputFormulario' onChange={handleChange} />

                        <label>Email</label>
                        <input name="email" type="email" value={form.email} className='inputFormulario' onChange={handleChange} />

                        <label>Senha</label>
                        <input name="senha" type="password" value={form.senha} className='inputFormulario' onChange={(e) => setForm({ ...form, senha: e.target.value })} />
                    </div>
                </div>
                <div className='f2'>
                    <div id='inputBox3'>
                        <label htmlFor="">Telefone</label>
                        <input name="telefone" type="text" value={form.telefone} className='inputFormulario' onChange={handleChange} />
                        <br />
                        <label htmlFor="">Rua</label>
                        <input name="rua" type="text" value={form.rua} className='inputFormulario' onChange={handleChange} />
                    </div>
                    <div id='inputBox4'>
                        <label htmlFor="">Bairro</label>
                        <input name="bairro" type="text" value={form.bairro} className='inputFormulario' onChange={handleChange} />
                        <br />
                        <label htmlFor="">Número</label>
                        <input name="numero" type="number" value={form.numero} className='inputFormulario' onChange={handleChange} />
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