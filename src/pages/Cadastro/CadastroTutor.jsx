import './CadastroTutor.css'
import { Camera } from "phosphor-react";
import { useState } from "react";
import { NavLink } from 'react-router-dom'

export default function CadastroTutor() {

    const [form, setForm] = useState({
        nome: "",
        cpf: "",
        telefone: "",
        rua: "",
        bairro: "",
        numero: "",
        email: "",
        senha: "",
        fotoTutor: ""
    });

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handleSubmit() {
        const body = {
            nome: form.nome,
            cpf: form.cpf,
            telefone: form.telefone,
            endereco: `${form.rua}, ${form.numero} - ${form.bairro}`,
            email: form.email,
            senha: form.senha,
            fotoTutor: form.fotoTutor
        };

        try {
            const response = await fetch("http://localhost:8000/api/usuario", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            });

            if (!response.ok) {
                const err = await response.json();
                throw new Error(err.error || "Erro ao cadastrar");
            }

            const data = await response.json();
            alert("Tutor cadastrado com sucesso!");
            console.log(data);

        } catch (err) {
            alert(err.message || "Erro ao cadastrar usuário");
            console.error(err);
        }
    }

    function handleFoto(e) {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = () => {
            setForm((prev) => ({
                ...prev,
                fotoTutor: reader.result.split(",")[1]
            }));
        };
        reader.readAsDataURL(file);
    }


    return (
        <div className='boxCadastroPet'>
            <div className='formularioTutor'>
                <h3>Cadastro Tutor</h3>

                <div className='f1'>
                    <div id='inputBox1'>
                        <div id='cadFotoTutor'>
                            <label className="fotoLabel">
                                {form.fotoTutor ? (
                                    <img
                                        src={`data:image/*;base64,${form.fotoTutor}`}
                                        className="previewFoto"
                                    />
                                ) : (
                                    <Camera size={32} />
                                )}
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFoto}
                                    style={{ display: "none" }}
                                />
                            </label>
                        </div>
                    </div>

                    <div id='inputBox2'>
                        <label>Nome</label>
                        <input name="nome" type="text" className='inputFormulario' onChange={handleChange} />

                        <label>CPF</label>
                        <input name="cpf" type="text" className='inputFormulario' onChange={handleChange} />

                        <label>Email</label>
                        <input name="email" type="email" className='inputFormulario' onChange={handleChange} />

                        <label>Senha</label>
                        <input name="senha" type="password" className='inputFormulario' onChange={handleChange} />
                    </div>
                </div>

                <div className='f2'>
                    <div id='inputBox3'>
                        <label>Telefone</label>
                        <input name="telefone" type="text" className='inputFormulario' onChange={handleChange} />

                        <label>Rua</label>
                        <input name="rua" type="text" className='inputFormulario' onChange={handleChange} />
                    </div>

                    <div id='inputBox4'>
                        <label>Bairro</label>
                        <input name="bairro" type="text" className='inputFormulario' onChange={handleChange} />

                        <label>Número</label>
                        <input name="numero" type="number" className='inputFormulario' onChange={handleChange} />
                    </div>
                </div>

                <NavLink to="/PerfilTutor" className="btnLink">
                    <button id='btCadastra' onClick={handleSubmit}>Cadastrar</button>
                </NavLink>

                <NavLink to="/ListaTutor" className="btnLink">
                    <button id='btCancela'>Cancelar</button>
                </NavLink>
            </div>
        </div>
    );
}
