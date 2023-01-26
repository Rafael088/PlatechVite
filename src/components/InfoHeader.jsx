import Card from "./cards/cardsHeader";
import { FcStatistics, FcAssistant, FcBullish } from "react-icons/fc";
function InfoHeader() {
    return ( 
        <section className="contInfo" id="platech">
            <Card title="Experiencia" name="Nuestra empresa cuenta con un equipo de expertos en desarrollo web y tecnologías Industria 4.0, que garantizan la creación de soluciones personalizadas y eficaces para nuestros clientes." >
                <FcStatistics className="icon"/>
            </Card>
            <Card title="Flexibilidad y escalabilidad" name="Ofrecemos soluciones flexibles y escalables, que se adaptan a las necesidades y requerimientos específicos de nuestros clientes. Esto nos permite brindar soluciones que se adapten a las necesidades de negocios de diferentes tamaños y sectores." id='cardMid'>
                <FcBullish className="icon"/>
            </Card>
            <Card title="Servicio al cliente" name="Ofrecemos un servicio al cliente excepcional, con el objetivo de brindar una experiencia satisfactoria a nuestros clientes. Estamos disponibles para responder sus preguntas y brindar soporte técnico en cualquier momento." >
                <FcAssistant className="icon"/>
            </Card>
            
        </section>
     );
}

export default InfoHeader;