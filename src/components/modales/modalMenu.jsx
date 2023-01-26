
import {NavLink, useLocation} from 'react-router-dom'
function ModalMenu({emp}) {
    return ( 
        <div className="contModalMenu"> 
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
        </div>
     );
}

export default ModalMenu;