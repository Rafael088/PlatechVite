import Allies from "../components/Allies";
import Footer from "../components/Footer";
import Form from "../components/Form";
import InfoHeader from "../components/InfoHeader";
import NavBar from "../components/NavBar"
import Services from "../components/Services";
import PresetOne from '../page/PresetOne'
function Home() {
  return (
    <section className="Home" id='home'>
        <NavBar/>
        <div className="contBody">
          <div className="contText">
            <b>Descubre cómo estamos cambiando el mundo</b>
            <h1>Transforma tu negocio con industria 4.0</h1>
            <div className="contBtns">
                <a href="#services" >Empezar</a>
                <a href="#platech"  id="why">¿Por qué Platech?</a>
            </div>
          </div>
          <div className="contImg">
            <div className="contFigure"> 

            </div>
            <div className="contFigure one"> 

            </div>
            <div className="contFigure two"> 

            </div>
            <img  src="https://cdn.discordapp.com/attachments/1065066497300504661/1065066943129866330/platech2.png" alt="Platech"/>

          </div>
        </div>
        <Services/>

        <PresetOne position={1} title="¿Eres emprendedor?" 
          text='Transforma tu negocio con la tecnología: ¡Descubre cómo la innovación tecnológica puede impulsar tu crecimiento! ¡Haz clic aquí para obtener más información'
          textBtn="Descubrir"
        />
        <InfoHeader/>

        <Allies/>
        
        <Footer/>
    </section>
  );
}

export default Home;
