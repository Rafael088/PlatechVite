
import { AiOutlineWhatsApp, AiOutlineMenu, AiOutlineCompress } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import {NavLink, useLocation} from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import ModalMenu from "./modales/modalMenu";

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
        }else{
            setModal(true)
        }
    }
    return ( 
        <div className="contNavBar">
            {modal? <ModalMenu emp={emp}/>: <></>}
            <div className='contCont'>
            <NavLink to='/'>
                <img src='https://cdn.discordapp.com/attachments/1065066497300504661/1065066928068104303/platech2-2.png' alt="Platech"/>
            </NavLink>
                <div className='contBtns'>
                    {emp?<NavLink to='/'>
                        Inicio
                    </NavLink>:<>
                            
                        </>}
                    <NavLink to='/emprende'>
                        Emprende
                    </NavLink>
                    {emp?
                        <>

                        </>:
                        <>
                        <a href='#services'>
                            Servicios
                        </a>
                        <a href='#contact'>
                            Contacto
                        </a>
                        </>
                    }
                    <NavLink to='/comunidad'>
                        Comunidad
                    </NavLink>
                    
                    <div className='contRedes'>

                        <a href='https://www.instagram.com/platechoficial' target="_blank">
                            <AiOutlineWhatsApp className='icon'/>
                        </a>
                        <a href='https://discord.gg/2efju64q' target="_blank">
                            <FaDiscord className='icon' />
                        </a>
                        
                    </div>
                </div>
                <div className="contBtnsMobile">
                    <button onClick={() => changeModal()}>
                        {modal?<AiOutlineCompress className="icon"/>: <AiOutlineMenu className="icon"/>}
                    </button>
                </div>
            </div>
            
        </div>
     );
}

export default NavBar;