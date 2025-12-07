import './EdicaoPet.css'
import { Camera } from "phosphor-react";
import { NavLink, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';

export default function EdicaoPet() {

    const { id } = useParams();
    const [tutores, setTutores] = useState([]);
    const [tipoPet, setTipoPet] = useState("");
    const [racasFiltradas, setRacasFiltradas] = useState([]);

    const racas = {
        cachorro: [
            "Akita",
            "Beagle",
            "Border Collie",
            "Boxer",
            "Bulldog Francês",
            "Bulldog Inglês",
            "Cocker Spaniel",
            "Dachshund",
            "Dálmata",
            "Doberman",
            "Golden Retriever",
            "Husky Siberiano",
            "Labrador Retriever",
            "Lhasa Apso",
            "Maltes",
            "Pastor Alemão",
            "Pinscher",
            "Pit Bull",
            "Poodle",
            "Pug",
            "Rottweiler",
            "Schnauzer",
            "Shih-tzu",
            "Spitz Alemão (Lulu da Pomerânia)",
            "Yorkshire Terrier",
            "Vira-lata (SRD)"
        ],

        gato: [
            "Angorá",
            "Bengal",
            "British Shorthair",
            "Himalaio",
            "Maine Coon",
            "Persa",
            "Ragdoll",
            "Siamês",
            "Sphynx",
            "Vira-lata (SRD)"
        ],

        coelho: [
            "Fuzzy Lop",
            "Holland Lop",
            "Lionhead",
            "Mini Rex",
            "Mini Satin",
            "Netherland Dwarf",
            "Vira-lata (SRD)"
        ],

        porquinhoDaIndia: [
            "Abissínio",
            "Americano",
            "Coronet",
            "Peruano",
            "Sheltie",
            "Teddy",
            "Vira-lata (SRD)"
        ],

        hamster: [
            "Chinês",
            "Dourado (Sírio)",
            "Roborovski",
            "Russo",
            "Winter White",
            "Vira-lata (SRD)"
        ],

        furao: [
            "Standard",
            "Angorá",
            "Black Sable",
            "Chocolate",
            "Cinnamon",
            "Vira-lata (SRD)"
        ],

        chinchila: [
            "Beige",
            "Black Velvet",
            "Ebony",
            "Mosaic",
            "Standard Grey",
            "White",
            "Vira-lata (SRD)"
        ],

        tartaruga: [
            "Jabuti Piranga",
            "Jabuti Tingá",
            "Tartaruga-de-orelha-vermelha",
            "Tartaruga-tigre-d'água",
            "Vira-lata (SRD)"
        ],

        passaro: [
            "Calopsita",
            "Canário",
            "Cacatua",
            "Curió",
            "Diamante Gould",
            "Galinha d’angola",
            "Mandarim",
            "Papagaio",
            "Periquito Australiano",
            "Ring Neck",
            "Vira-lata (SRD)"
        ]
    }

    const [form, setForm] = useState({
        sinpatinhas: "",
        nome: "",
        tipo: "",
        raca: "",
        idUsuario: "",
        dataNascimento: "",
    });

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        async function carregarTutores() {
            const res = await fetch("http://localhost:8000/api/usuario");
            const data = await res.json();
            setTutores(data);
        }
        carregarTutores();
    }, []);

    useEffect(() => {
        async function carregarPet() {
            const res = await fetch(`http://localhost:8000/api/pet/${id}`);
            const data = await res.json();

            setForm({
                sinpatinhas: data.sinpatinhas,
                nome: data.nome,
                tipo: data.tipo,
                raca: data.raca,
                idUsuario: data.idUsuario,
                dataNascimento: data.dataNascimento,
            });

            setTipoPet(data.tipo);
            setRacasFiltradas(racas[data.tipo] || []);
        }

        carregarPet();
    }, [id]);

    async function salvarAlteracoes() {
        try {
            const response = await fetch(`http://localhost:8000/api/pet/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form)
            });

            if (!response.ok) {
                alert("Erro ao salvar!");
                return;
            }

            alert("Alterações salvas com sucesso!");
            window.location.href = "/ListaPet";

        } catch (err) {
            console.error(err);
            alert("Erro ao salvar alterações.");
        }
    }


    return (
        <div className='boxCadastroPet'>
            <div className='formulario'>
                <h3>Edição Pet</h3>
                <div className='f1'>
                    <div id='inputBox1'>
                        <div id='cadFotoPet'>
                            <Camera size={32} />
                        </div>
                    </div>
                    <div id='inputBox2'>
                        <label htmlFor="">Simpatinhas</label>
                        <input name="sinpatinhas" type="text" className='inputFormulario' value={form.sinpatinhas} onChange={handleChange}/>
                        <br />
                        <label htmlFor="">Nome</label>
                        <input name='nome' type="text" className='inputFormulario' value={form.nome} onChange={handleChange}/>

                    </div>
                </div>
                <div className='f2'>
                    <div id='inputBox3'>
                        <label htmlFor="">Tipo</label>
                        <select
                            name="tipo"
                            className="inputFormulario"
                            value={form.tipo}
                            onChange={(e) => {
                                handleChange(e);
                                setTipoPet(e.target.value);
                                setRacasFiltradas(racas[e.target.value] || []);
                            }}
                        >
                            <option value="">Selecione</option>
                            {Object.keys(racas).map((t) => (
                                <option key={t} value={t}>{t}</option>
                            ))}
                        </select>
                        <br />

                        <label htmlFor="">Tutor</label>
                        <select
                            name="idUsuario"
                            className="inputFormulario"
                            value={form.idUsuario}
                            onChange={handleChange}
                        >
                            <option value="">Selecione</option>
                            {tutores.map((t) => (
                                <option key={t.idUsuario} value={t.idUsuario}>{t.nome}</option>
                            ))}
                        </select>
                    </div>
                    <div id='inputBox4'>
                        <label htmlFor="">Raça</label>
                        <select
                            name="raca"
                            className="inputFormulario"
                            value={form.raca}
                            onChange={handleChange}
                            disabled={!form.tipo}
                        >
                            <option value="">Selecione</option>
                            {racasFiltradas.map((r) => (
                                <option key={r} value={r}>{r}</option>
                            ))}
                        </select>
                        <br />
                        <label htmlFor="">Data de nascimento</label>
                        <input name="dataNascimento" type="date" className='inputFormulario' value={form.dataNascimento} onChange={handleChange}/>
                    </div>
                </div>

                <NavLink to="/PerfilPet" className="btnLink">
                    <button id='btSalvaAlteracao' onClick={salvarAlteracoes}>Salvar Alterações</button>
                </NavLink>

                <NavLink to="/ListaPet" className="btnLink">
                    <button id='btCancela'>Cancelar</button>
                </NavLink>
            </div>

        </div>
    )


}