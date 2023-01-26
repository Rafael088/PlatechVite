import NavBar from "../components/NavBar";
import Svg from "../assets/wave.svg"
import { AiOutlineInstagram, AiOutlineWhatsApp, AiFillYoutube } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
function Undertake() {
    return ( 
        <section className="contUndertake">
            <NavBar/>
            <div className="contBody">

                <div className="contContent">
                    <h3>Emprendedor!</h3>
                    <p>Registrate y obten <b>1 Mes Gratis</b> de nuestros servicios y dale un impuslo tecnologico a tu Negocio</p>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfTC9JbYjKiAhUu5o8Vc2y-6ImeRzL_BjNNnRvkqShLHYUEVA/viewform?usp=sf_link" target="_blank" >Registrarme</a>
                </div>
                <div className="contImg">
                    <img src="https://cdn.discordapp.com/attachments/1065066497300504661/1067980469230112818/0633.png" alt="Startup Platech" />
                </div>
                <img src={Svg} alt="Platech" id="wave"/>
                <div className="contRedes">
                    <a href='https://www.instagram.com/platechoficial' target="_blank" rel="noreferrer">
                        <AiOutlineInstagram className="icon"/>
                    </a>
                    <a href='www.instagram.com'>
                        <AiOutlineWhatsApp className="icon"/>
                    </a>
                    <a href='www.instagram.com'>
                        <FaLinkedinIn className="icon"/>
                    </a>
                    <a href='www.instagram.com'>
                        <AiFillYoutube className="icon"/>
                    </a>
                </div>
            </div>
        </section>
     );
}

export default Undertake;