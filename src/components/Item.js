import "./Item.css"

function Item(props) {
    return (
        <div className="item">
            <p>{props.done==true ? "✅" : "❌"} {props.description}</p>
            <p className="date">
                {props.dueDate + " Faltan " 
                    + Math.round((new Date(props.dueDate) - new Date())/1000/60/60/24 )
                    + " días"}
            </p>
            <p><a href="">Eliminar</a></p>
        </div>
    )
}

export default Item