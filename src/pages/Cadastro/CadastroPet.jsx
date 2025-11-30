import './CadastroPet.css'
import { Camera } from "phosphor-react";

export default function CadastroPet() {

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

                <button id='btCadastra'>Cadastrar</button>
                <button id='btCancela'>Cancelar</button>
            </div>

        </div>
    )


}