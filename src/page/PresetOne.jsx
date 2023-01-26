
import imgOne from '../assets/5949651_3081623.svg'

import {NavLink} from 'react-router-dom'
function PresetOne({ text, title, textBtn, }) {
    return ( 
        <section className="contPreset" id="presetOne">
            <div className="contContent rigth">
                <div className="contImg">
                    <img className="img" src={imgOne} alt={title}/>
                </div>
                <div className="contBody">
                    <h3>{title}</h3>
                    <p className="text">{text}</p>
                    <NavLink className="contBtnMain" to="/emprende">
                        <p>{textBtn}</p>
                    </NavLink>
                </div>
            </div>
        </section>
     );
}

export default PresetOne;