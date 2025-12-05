import { NavLink } from 'react-router-dom'
import './Menu.css'
import { House, User, CalendarBlank, ClockCounterClockwise, PawPrint, Users } from "phosphor-react";

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

                 <NavLink to="/ListaPet" id='listaPet'>
                    <PawPrint size={28} id='iconPets'/>
                    <h6>Lista de Pets</h6>
                </NavLink>

                 <NavLink to="/ListaTutor" id='listaTutor'>
                    <Users size={28} id='iconTutor'/>
                    <h6>Lista de Tutores</h6>
                </NavLink>



            </nav>





        </div>
    )
}