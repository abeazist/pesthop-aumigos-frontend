import React, { useEffect, useState } from "react";
import "./Home.css";
import "swiper/css";
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { Bathtub, Scissors, ShoppingBag, ListPlus } from "phosphor-react";
import { NavLink } from "react-router-dom";
import GraficoPets from "../../components/GraficoPets.jsx";


export default function Home() {
    return (
        <div className="containerHome">
            <div className="menuHorizontal">
                <img src="snoopyHouse.png" id="logoMenuHorizontal" />

                <div id="itensMenuH">
                    <a href="#pg2">
                        <p>Serviços</p>
                    </a>

                    <a href="#pg3">
                        <p>Galeria</p>
                    </a>


                    <a href="#pg4">
                        <p>Agendamento</p>
                    </a>

                    <a href="#pg5">
                        <p>Estatísticas</p>
                    </a>


                    {/* <NavLink to="/PerfilTutor">
                        <p>Meu Perfil</p>
                    </NavLink> */}


                    <NavLink to="/Login">
                        <button className="btHome">Login</button>
                    </NavLink>

                    <NavLink to="/CadastroTutor">
                        <button className="btHome">Cadastrar</button>
                    </NavLink>
                </div>

            </div>
            <div className="pg1" id="pg1">
                <div id="sobrePetshop">
                    <img src="snoopyHouse.png" id="snoopyCasaHome" />
                    <h1>Esnupi pet shop</h1>
                    <h5>Cuidando do seu pet com amor de verdade</h5>
                    <p id="descricaoPetshop">Somos apaixonados por animais e dedicados a oferecer uma experiência completa para você e seu pet. Do banho & tosa aos acessórios mais estilosos, aqui você encontra tudo o que precisa em um só lugar.</p>
                </div>

                <div id="divFotoHome">
                    <img src="pets.jpg" id="fotoHome" />
                </div>


            </div>
            <div className="pg2" id="pg2">
                <h2 id="h2Servicos">Nossos serviços</h2>
                <div id="corpoP2">


                    <div className="list1">
                        <div id="banho">
                            <Bathtub size={35} id="iconeBanheira" />
                            <div id="banhoInfos">
                                <h3>Banho</h3>
                                <h5>Do jeitinho que seu pet merece: com cuidado, carinho e estilo</h5>
                                <p>Nosso serviço de banho garante uma experiência relaxante e segura para o seu pet. Utilizamos produtos específicos para cada tipo de pelagem e pele, deixando seu amigo limpo, cheiroso e confortável. Aqui, cada banho é feito com muito carinho e atenção</p>
                            </div>
                        </div>

                        <div id="tosa">
                            <Scissors size={35} id="iconeTesoura" />
                            <div id="tosaInfos">
                                <h3>Tosa</h3>
                                <h5>Tosa feita com precisão, segurança e muito amor</h5>
                                <p>Nossa equipe de profissionais realiza tosas com técnica e carinho, sempre respeitando o formato e a necessidade de cada pet. Da tosa higiênica até estilos personalizados, garantimos conforto, segurança e um visual impecável</p>
                            </div>
                        </div>
                    </div>
                    <div className="list2">
                        <div id="produtos">
                            <ShoppingBag size={35} id="iconeShop" />
                            <div id="produtosInfos">
                                <h3>Produtos</h3>
                                <h5>Os melhores produtos para quem você mais ama</h5>
                                <p>Seleção completa de produtos pensados para o bem-estar do seu pet. Trabalhamos com as melhores marcas de rações, acessórios, brinquedos, itens de higiene e muito mais. Tudo escolhido com cuidado para oferecer saúde, segurança e conforto para quem você ama.</p>
                            </div>
                        </div>

                        <div id="combo">
                            <ListPlus size={35} id="iconeCombo" />
                            <div id="comboInfos">
                                <h3>Combo</h3>
                                <h5>O cuidado completo que seu pet merece</h5>
                                <p>O combo banho e tosa reúne tudo o que seu pet precisa para ficar limpo, confortável e cheio de charme. Uma experiência completa que combina higiene, saúde e estética, sempre com amor e atenção em cada etapa.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="pg-3galeriaPets" id="pg3">
                <h3>Galeria de pets</h3>
                <Swiper
                    slidesPerView={3}

                    loop={true}
                    navigation={true}
                    modules={[Navigation]}
                >
                    <SwiperSlide>
                        <img src="scott.jpg" alt="dogs" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="farofa.jpg" alt="farofa" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="luna.jpg" alt="farofa" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="tiao.jpg" alt="farofa" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="frajola.jpg" alt="farofa" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="hannah.jpg" alt="farofa" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="maya.jpg" alt="farofa" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="sky.jpg" alt="farofa" />
                    </SwiperSlide>

                </Swiper>

            </div>
            <div className="pg4" id="pg4">
                <h3>Faça agora um agendamento!</h3>
                <br />
                <p>Garantimos o bem-estar dos pets através de cuidados profissionais e muito carinho</p>
                <br />
                <NavLink to="/Agendamento">
                    <button id="btAgendamentoHome">Fazer um agendamento</button>
                </NavLink>

            </div>

            <div className="pg5" id="pg5">
                <div className="corpoPg5">
                    <h2>Veja quais pets mais passam por aqui!</h2>
                    <GraficoPets />
                     
                </div>


            </div>


        </div>

    )
}