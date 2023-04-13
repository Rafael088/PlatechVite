
import { AiOutlineWhatsApp, AiOutlineMenu, AiOutlineCompress, AiOutlineCalendar } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { NavLink, useLocation } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import ModalMenu from "./modales/modalMenu";
import MenuProduct from "./MenuProduct";

function NavBar() {
    const ruta = useLocation()
    const [emp, setEmp] = useState(false);
    const [modal, setModal] = useState(false);
    useEffect(() => {
        if (ruta.pathname === "/emprende") {
            setEmp(true)
        }
        if (ruta.pathname === "/comunidad") {
            setEmp(true)
        }
    }, [ruta])
    function changeModal() {
        if (modal) {
            setModal(false)
        } else {
            setModal(true)
        }
    }
    return (
        <div className="contNavBar">

            {modal ? <ModalMenu emp={emp} /> : <></>}
            <div className='contCont'>
                <NavLink to='/'>
                    <img src='https://cdn.discordapp.com/attachments/1065066497300504661/1065066928068104303/platech2-2.png' alt="Platech" />

                </NavLink>
                <div className='contBtns'>
                    {emp ? <NavLink to='/'>
                        Inicio
                    </NavLink> : <>

                    </>}
                    {emp ?
                        <>

                        </> :
                        <>
                            <NavLink to='/productos' id="menuProduct">
                                Productos
                                <MenuProduct/>
                            </NavLink>
                            <a href='#contact'>
                                Contacto
                            </a>
                        </>
                    }
                    <div className="separador">
                    </div>
                    <NavLink to='/comunidad'>
                        Comunidad
                    </NavLink>
                    <NavLink to='/comunidad'>
                        Eventos
                    </NavLink>
                    <div className="separador">

                    </div>
                    <div className='contRedes'>

                        <a href='https://www.instagram.com/platechoficial' target="_blank">
                            <AiOutlineWhatsApp className='icon' />
                        </a>
                        <a href='https://discord.gg/2efju64q' target="_blank">
                            <FaDiscord className='icon' />
                        </a>

                    </div>
                </div>
                <div className="contBtnsMobile">
                    <button onClick={() => changeModal()}>
                        {modal ? <AiOutlineCompress className="icon" /> : <AiOutlineMenu className="icon" />}
                    </button>
                </div>
            </div>

        </div>
    );
}

export default NavBar;