import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom'
import "./PerfilPet.css";
import { Plus, PencilSimple, Camera } from "phosphor-react";

export default function PerfilPet() {
    return (
        <div className="boxPerfilTutor">
            <h5 id="h5PerfilPet">Perfil Pet</h5>
            <div id="meuPerfil">
                <div id="fotoPerfilTutor">
                    <div id="ft">
                        <Camera size={32} />
                    </div>

                    <button id="btEditaFotoTutor"><PencilSimple size={30} /></button>

                </div>
                <div className="colunaInput">
                    <label>Simpatinhas</label>
                    <input type="text" className="inputPerfil" />
                    <br />

                    <label>Tutor</label>
                    <input type="text" className="inputPerfil" />

                    <br />
                    <label>Tipo</label>
                    <input type="text" className="inputPerfil" />
                </div>

                <div className="colunaInput">
                    <label>Nome</label>
                    <input type="text" className="inputPerfil" />
                    <br />

                    <label>Raça</label>
                    <input type="text" className="inputPerfil" />
                    <br />

                    <label>Data de Nascimento</label>
                    <input type="number" className="inputPerfil" />

                </div>
            </div>
            <br />
            <div>
                <NavLink to="/EdicaoPet" className="btEditWrapper">
                    <button id="btEditPerfil">Editar perfil</button>
                </NavLink>
            </div>
            <hr />
            <div id="meusPets">
                <h5>Outros Pets</h5>

                <div className="listPets">
                    <NavLink>
                        <div id="userPet"></div>
                    </NavLink>
                    <NavLink to="/PerfilPet">
                        <div>
                            <img src="scott.png" id="userPet" />
                        </div>

                    </NavLink>

                </div>
            </div>

        </div>
    )

}
