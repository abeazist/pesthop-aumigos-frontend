import { NavLink } from 'react-router-dom'
import './Menu.css'
import { House, User, CalendarBlank, ClockCounterClockwise } from "phosphor-react";

export default function Menu() {

    return (

        <div className='boxMenu'>
            <nav>

                <div id='menu1'>
                    <img src="logoPetshop.png" id='logoPetshop' />
                    <hr />
                </div>

                <NavLink to="/Home" id='home'>
                    <House size={28} id='iconHome'/>
                    <h6>Home</h6>
                </NavLink>

                <NavLink to="/PerfilTutor" id='meuPerfilMenu'>
                    <User size={28} id='iconUser'/>
                    <h6>Meu Perfil</h6>
                </NavLink>

                <NavLink to="/Agendamento" id='agendamento'>
                    <CalendarBlank size={28} id='iconCalendario'/>
                    <h6>Agendamento</h6>
                </NavLink>

                <NavLink to="/Historico" id='historico'>
                    <ClockCounterClockwise size={28} id='iconHistorico'/>
                    <h6>Histórico</h6>
                </NavLink>





            </nav>





        </div>
    )
}