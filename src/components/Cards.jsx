import ButtonMain from "./ButtonMain";

function Cards({text, img, title, id}) {
    return ( 
        <div className="contCard">
            <div className="leftCard">
                <img src={img} alt="Platech Services" id={id} />
            </div>
            <div className="bodyCard">
                <h3>{title}</h3>
                <p>{text}</p>
            </div>

        </div>
     );
}

export default Cards;