import Cards from "./Cards";
function Services() {
    return ( 
        <section className="contServices" id="services" >
            <div className="contBody">
                <Cards id="one" text="Diseño web personalizado" title="Páginas Web" img="https://cdn.discordapp.com/attachments/1065066497300504661/1067267988052529172/browser.png"/>
                <Cards id="two" text="Gestión de productividad y ventas" title="Aplicaciones" img="https://cdn.discordapp.com/attachments/1065066497300504661/1067264782991888504/574117322.png"/>
                <Cards id="three" text="Procesamiento y aprendizaje automático" title="Inteligencia Artificial" img="https://cdn.discordapp.com/attachments/1065066497300504661/1067267292586577930/769.png"/>
                <Cards id="for" text="Innovación, constancia y enfoque" title="Soluciones" img="https://cdn.discordapp.com/attachments/1065066497300504661/1067269147039383594/2374727.png"/>
            </div>
        </section>
     );
}

export default Services;