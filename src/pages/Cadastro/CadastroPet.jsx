import { useState, useEffect } from 'react';
import './CadastroPet.css'
import { Camera } from "phosphor-react";
import { NavLink } from 'react-router-dom'

export default function CadastroPet() {

    const [tipoPet, setTipoPet] = useState("");
    const [raca, setRaca] = useState("");

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

    const racasFiltradas = racas[tipoPet] || [];

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const [tutores, setTutores] = useState([]);
    const [form, setForm] = useState({
        simpatinhas: "",
        nome: "",
        tipo: "",
        raca: "",
        idUsuario: "",
        dataNascimento: "",
        fotoPet: "",
    });

    const cadastrarPet = async () => {
        try {
            const response = await fetch("http://localhost:8000/api/pet", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (!response.ok) {
                const errorData = await response.json();
                alert("Erro: " + errorData.error);
                return;
            }

            alert("Pet cadastrado com sucesso!");
            // redirecionar para perfil ou lista
            window.location.href = "/PerfilTutor";
        } catch (err) {
            console.error(err);
            alert("Erro ao cadastrar o pet.");
        }
    };

    useEffect(() => {
        async function carregarTutores() {
            try {
                const response = await fetch("http://localhost:8000/api/usuario");
                const data = await response.json();
                setTutores(data);
            } catch (err) {
                console.error("Erro ao carregar tutores", err);
            }
        }
        carregarTutores();
    }, []);

    function handleFoto(e) {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = () => {
            setForm((prev) => ({
                ...prev,
                fotoPet: reader.result.split(",")[1]
            }));
        };
        reader.readAsDataURL(file);
    }

    return (
        <div className='boxCadastroPet'>
            <div className='formulario'>
                <h3>Cadastro Pet</h3>
                <div className='f1'>
                    <div id='inputBox1'>
                        <div id='cadFotoTutor'>

                            <label className="fotoLabel">
                                {form.fotoPet ? (
                                    <img
                                        src={`data:image/*;base64,${form.fotoPet}`}
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
                        <label htmlFor="">Sinpatinhas</label>
                        <input name="sinpatinhas" type="number" className='inputFormulario' onChange={handleChange} />
                        <br />
                        <label htmlFor="">Nome</label>
                        <input name="nome" type="text" className='inputFormulario' onChange={handleChange} />

                    </div>
                </div>
                <div className='f2'>
                    <div id='inputBox3'>
                        <label htmlFor="">Tipo</label>
                        <select name="tipo" className='inputFormulario' onChange={(e) => { setTipoPet(e.target.value); setRaca(""); handleChange(e) }}>
                            <option value="">Selecione</option>
                            <option value="cachorro">Cachorro</option>
                            <option value="gato">Gato</option>
                            <option value="coelho">Coelho</option>
                            <option value="porquinhoDaIndia">Porquinho da índia</option>
                            <option value="hamster">Hamster</option>
                            <option value="furao">Furão</option>
                            <option value="chinchila">Chinchila</option>
                            <option value="tartaruga">Tartaruga</option>
                            <option value="passaro">Pássaro</option>


                        </select>
                        <br />
                        <label>Tutor</label>
                        <select
                            name="idUsuario"
                            className="inputFormulario"
                            value={form.idUsuario}
                            onChange={handleChange}
                        >
                            <option value="">Selecione um tutor</option>

                            {tutores.map((t) => (
                                <option key={t.idUsuario} value={t.idUsuario}>
                                    {t.nome}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div id='inputBox4'>
                        <label htmlFor="">Raça/Espécie</label>
                        <select name="raca" className='inputFormulario' value={form.raca} onChange={(e) => { setRaca(e.target.value); handleChange(e) }} disabled={!tipoPet}>
                            <option value="">Selecione</option>
                            {racasFiltradas.map((r) => (
                                <option key={r} value={r} onChange={handleChange}>{r}</option>
                            ))}

                        </select>
                        <br />
                        <label htmlFor="">Data de nascimento</label>
                        <input name="dataNascimento" type="date" className='inputFormulario' onChange={handleChange} />
                    </div>
                </div>

                <NavLink to="/PerfilTutor" className="btnLink">
                    <button id='btCadastra' onClick={cadastrarPet}>Cadastrar</button>
                </NavLink>

                <NavLink to="/ListaPet" className="btnLink">
                    <button id='btCancela'>Cancelar</button>
                </NavLink>
            </div>

        </div>
    )


}
