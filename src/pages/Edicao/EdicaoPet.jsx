import './EdicaoPet.css'
import { Camera } from "phosphor-react";
import { NavLink } from 'react-router-dom'

export default function EdicaoPet() {

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
                        <input type="text" className='inputFormulario' />
                        <br />
                        <label htmlFor="">Nome</label>
                        <input type="text" className='inputFormulario' />

                    </div>
                </div>
                <div className='f2'>
                    <div id='inputBox3'>
                        <label htmlFor="">Tipo</label>
                        <input type="text" className='inputFormulario' />
                        <br />
                        <label htmlFor="">Tutor</label>
                        <input type="text" className='inputFormulario' />
                    </div>
                    <div id='inputBox4'>
                        <label htmlFor="">Raça</label>
                        <input type="text" className='inputFormulario' />
                        <br />
                        <label htmlFor="">Data de nascimento</label>
                        <input type="text" className='inputFormulario' />
                    </div>
                </div>

                <NavLink to="/PerfilPet" className="btnLink">
                    <button id='btSalvaAlteracao'>Salvar Alterações</button>
                </NavLink>

                <NavLink to="/ListaPet" className="btnLink">
                    <button id='btCancela'>Cancelar</button>
                </NavLink>
            </div>

        </div>
    )


}