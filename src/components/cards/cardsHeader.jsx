
function Card({title, name, children, id}) {
    return ( 
        <div className="contCardHeader" id={id}>
            <div className="header">
                {children}
            </div>
            <div className="body">
                <p>{title}</p>
            </div>
            <div className="footer">
                <p>{name}</p>
            </div>
            
            
        </div>
     );
}

export default Card;