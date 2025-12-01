import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom'
import "./PerfilTutor.css";
import { Plus, PencilSimple, Camera } from "phosphor-react";

export default function PerfilTutor() {
    return (
        <div className="boxPerfilTutor">
            <h5 id="h5MeuPerfil">Meu Perfil</h5>
            <div id="meuPerfil">
                <div id="fotoPerfilTutor">
                    <div id="ft">

                        <Camera size={32} />
                    </div>

                    <button id="btEditaFotoTutor"><PencilSimple size={30} /></button>

                </div>
                <div className="colunaInput">
                    <label>CPF</label>
                    <input type="text" className="inputPerfil" />
                    <br />

                    <label>Nome</label>
                    <input type="text" className="inputPerfil" />

                    <br />
                    <label>Rua</label>
                    <input type="text" className="inputPerfil" />
                </div>

                <div className="colunaInput">
                    <label>Telefone</label>
                    <input type="text" className="inputPerfil" />
                    <br />

                    <label>Bairro</label>
                    <input type="text" className="inputPerfil" />
                    <br />

                    <label>Número</label>
                    <input type="number" className="inputPerfil" />

                </div>
            </div>
            <br />
            <div className="btEditWrapper">
                <NavLink to="/EdicaoTutor" className="navBtn">
                    <button id="btEditPerfil">Editar perfil</button>
                </NavLink>

            </div>
            <hr />
            <div id="meusPets">
                <h5>Meus Pets</h5>

                <div className="listPets">
                    <NavLink>
                        <div id="userPet"></div>
                    </NavLink>
                    <NavLink to="/PerfilPet">
                        <div>
                            <img src="scott.png" id="userPet" />
                        </div>

                    </NavLink>
                    {/* <img src="" alt="" className="petFotoPerfil" /> */}
                    <NavLink to="/CadastroPet">
                        <button id="btAdicionaPet">
                            <Plus size={32} />
                        </button>
                    </NavLink>
                </div>
            </div>

        </div>
    )

}
