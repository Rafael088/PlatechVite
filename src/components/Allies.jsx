import imgC from '../assets/checPng.png'
import imgS from '../assets/susuerte.png'
function Allies() {
    return ( 
        <section className="contAllies">
            <h3>Aliados</h3>
            <div className="contBody">
                <div className="contName">
                    <div className="cardName">
                        <b>Chec</b>
                    </div>
                    <div className="cardName">
                        <b>Susuerte</b>
                    </div>
                    
                </div>
                <div className="contCards">
                    <div className="card">
                        <div className="contCardHeader">
                            <img src={imgC} alt="chec"/>
                            <b>IA, Hardware y Plataforma Web</b>
                        </div>
                        <div className="contCardBody">
                            <p>Creamos IA, para predecir fallos atmosféricos en las redes eléctricas del departamento de caldas, siendo Platech finalista del Programa Innóvate Chec.</p>
                        </div>
                        <div className="contCardFooter">
                            <b>2022</b>
                        </div>
                    </div>
                    <div className="card">
                        <div className="contCardHeader">
                            <img src={imgS} alt="susuerte"/>
                            <b>IA, Hardware y Software</b>
                        </div>
                        <div className="contCardBody">
                            <p>Creamos IA, para el reconocimiento digital de documentos físicos y comprobar su validez, en el programa Open Mas siendo Platech Finalistas y <b>Ganadores</b>.</p>
                        </div>
                        <div className="contCardFooter">
                            <b>2023</b>
                        </div>
                    </div>
                </div>
                <div className="contFooter">

                    <b>La innovación tecnológica al servicio de su industria</b>
                    <div className='bord'>

                    </div>
                </div>
                <div className="contPass">
                    <img className='contImg' src='https://cdn.discordapp.com/attachments/1065066497300504661/1067617372304842752/libro-compressor.png' alt='Manizales Mas' />
                    <img className='contImg' src='https://cdn.discordapp.com/attachments/1065066497300504661/1067617658385735761/Portada-Open-Mas-2.jpg' alt='Open Mas' />
                    <img className='contImg' src='https://cdn.discordapp.com/attachments/1065066497300504661/1067617976196538478/company-image-1188-3.png' alt='Innovate Chec' />
                </div>
            </div>
        </section>
     );
}

export default Allies;