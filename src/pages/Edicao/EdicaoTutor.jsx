import './EdicaoTutor.css'
import { Camera } from "phosphor-react";
import { NavLink } from 'react-router-dom'

export default function EdicaoTutor() {

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
                        <input type="text" className='inputFormulario' />
                        <br />
                        <label htmlFor="">CPF</label>
                        <input type="text" className='inputFormulario' />

                    </div>
                </div>
                <div className='f2'>
                    <div id='inputBox3'>
                        <label htmlFor="">Telefone</label>
                        <input type="text" className='inputFormulario' />
                        <br />
                        <label htmlFor="">Rua</label>
                        <input type="text" className='inputFormulario' />
                    </div>
                    <div id='inputBox4'>
                        <label htmlFor="">Bairro</label>
                        <input type="text" className='inputFormulario' />
                        <br />
                        <label htmlFor="">Número</label>
                        <input type="number" className='inputFormulario' />
                    </div>
                </div>

                <NavLink to="/PerfilTutor" className="btnLink">
                    <button id='btSalvaAlteracao'>Salvar Alterações</button>
                </NavLink>

                <NavLink to="/PerfilTutor" className="btnLink">
                    <button id='btCancela'>Cancelar</button>
                </NavLink>
            </div>

        </div>
    )


}