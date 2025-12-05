import { useState } from 'react';
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

    return (
        <div className='boxCadastroPet'>
            <div className='formulario'>
                <h3>Cadastro Pet</h3>
                <div className='f1'>
                    <div id='inputBox1'>
                        <div id='cadFotoPet'>
                            <Camera size={32} />
                        </div>
                    </div>
                    <div id='inputBox2'>
                        <label htmlFor="">Sinpatinhas</label>
                        <input type="number" className='inputFormulario' />
                        <br />
                        <label htmlFor="">Nome</label>
                        <input type="text" className='inputFormulario' />

                    </div>
                </div>
                <div className='f2'>
                    <div id='inputBox3'>
                        <label htmlFor="">Tipo</label>
                        <select name="" className='inputFormulario' onChange={(e) => { setTipoPet(e.target.value); setRaca(""); }}>
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
                        <label htmlFor="">Tutor</label>
                        <input type="text" className='inputFormulario' />
                    </div>
                    <div id='inputBox4'>
                        <label htmlFor="">Raça/Espécie</label>
                        <select name="" className='inputFormulario' value={raca} onChange={(e) => setRaca(e.target.value)} disabled={!tipoPet}>
                            <option value="">Selecione</option>
                            {racasFiltradas.map((r) => (
                                <option key={r} value={r}>{r}</option>
                            ))}

                        </select>
                        <br />
                        <label htmlFor="">Data de nascimento</label>
                        <input type="date" className='inputFormulario' />
                    </div>
                </div>

                <NavLink to="/PerfilTutor" className="btnLink">
                    <button id='btCadastra'>Cadastrar</button>
                </NavLink>

                <NavLink to="/ListaPet" className="btnLink">
                    <button id='btCancela'>Cancelar</button>
                </NavLink>
            </div>

        </div>
    )


}
