
import { AiOutlineInstagram, AiOutlineWhatsApp, AiFillYoutube } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
function Footer() {
    return ( 
        <section className="Footer" id="contact">
            <div className="contBody">
                
                <p>Un equipo en búsqueda de la transformación digital de las empresas, ayudando al crecimiento comercial y tecnológico del país, con habilidades que apuntan a la nueva Generación Digital</p>
                <p>Conoce más sobre nosotros en nuestras redes sociales</p>
                
                <div className="contBtn">
                <a href='https://www.instagram.com/platechoficial' target="_blank" rel="noreferrer">
                    <AiOutlineInstagram className="icon"/>
                </a>
                <a href='https://wa.link/53cmy4'>
                    <AiOutlineWhatsApp className="icon"/>
                </a>
                <a href='https://www.youtube.com/channel/UCf4z7RWq78WR4sBrguuKH1A'>
                    <AiFillYoutube className="icon"/>
                </a>
                </div>
            </div>
        </section>
     );
}

export default Footer;