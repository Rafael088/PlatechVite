import { NavLink } from "react-router-dom";

function MenuProduct() {
    return ( 
        <div className="contNav-menuProduc">
            <div className="menuProduct-body">
                <NavLink className="btn">Falcon</NavLink>
                <NavLink className="btn">Rabbit</NavLink>
            </div>
        </div>
     );
}

export default MenuProduct;